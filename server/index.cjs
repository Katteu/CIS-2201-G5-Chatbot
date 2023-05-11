const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const http = require('http');
const crypto = require('crypto'); // import the crypto module
const {Server} = require('socket.io');
const axios = require('axios');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  

io.on("connection", (socket) => {
 
    console.log(`User Connected: ${socket.id}`);

    socket.on('chat_request', async (studentId,callback) => {
        try {
          setTimeout(()=>{db.query('DELETE FROM livechat_tb WHERE status=?',['declined']);},1000);
          // Call the API endpoint to get the ID of an available program coordinator
          const response = await axios.get('http://localhost:3001/api/progcoord/available');
          const availableProgramCoordinators = response.data.availableProgramCoordinators;
      
          // Choose a random program coordinator to send the chat request to
          const randomProgramCoordinator = availableProgramCoordinators[Math.floor(Math.random() * availableProgramCoordinators.length)];
          const programCoordinatorId = randomProgramCoordinator._userID;
      
          // Save the chat request to the database
          db.query('INSERT INTO livechat_tb(stud_id, progcoord_id, status) VALUES (?, ?, ?)', [studentId, programCoordinatorId, 'pending']);
          timeoutId = setTimeout(() => {
            db.query('SELECT * FROM livechat_tb WHERE stud_id = ? AND status = ?', [studentId, 'pending'], (error, rows) => {
              if (error) {
                console.error(error);
                return;
              }
      
              if (rows.length > 0) {
                const chatRequestId = rows[0].request_id;
                db.query('UPDATE livechat_tb SET status = ? WHERE request_id = ?', ['declined', chatRequestId]);
              }
            });
          }, 5 * 60 * 1000);
      
          let intervalId = setInterval(() => {
            db.query(
                "SELECT * FROM livechat_tb WHERE stud_id = ? AND status IN(?,?) ORDER BY created_at DESC LIMIT 1",
              [studentId, "accepted","declined"],
              (error, rows) => {
                if (error) {
                  console.error(error);
                  return;
                }
                if (rows.length > 0) {
                    const chatRequest = rows[0];
                    const date_time = chatRequest.created_at;
                    const reqID = chatRequest.request_id;
                  if (chatRequest.status === "accepted") {
                    clearInterval(intervalId);
                    clearTimeout(timeoutId);
                    /*Store sa log*/
                    db.query('INSERT INTO log_tb(_userID, _assistID, date_time) VALUES (?, ?, ?)', [studentId, programCoordinatorId, date_time]);
                    /*Delete query*/
                    db.query('DELETE FROM livechat_tb WHERE request_id = ?',reqID);
                  }
                //   console.log("Server side:" + chatRequest.status);
                  callback({status: chatRequest.status, req_ID: reqID});
                }
              }
            );
          }, 2500);

          socket.on("stop_chat", async (studentId, callback) => {
            try {
              callback({ status: chatRequest.status, req_ID: reqID });
              clearInterval(intervalId); // Clear the interval
              clearTimeout(timeoutId); // Clear the timeout
            } catch (error) {
              console.error(error);
            }
          });
        } catch (error) {
          console.error(error);
        }
      });


      socket.on('stop_chat', async (studentId,callback) => {
        try {
          callback({status: chatRequest.status, req_ID: reqID});
        } catch (error) {
          console.error(error);
        }
      });


    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });


    socket.on("send_message", (data) => {
        // console.log(data);
        io.emit('receive_message', data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });

    // socket.on("end_chat", (room,author) => {
    //     console.log("Chat ended in room", room);
    //     const roomSockets = io.sockets.adapter.rooms.get(room);
    //     if (roomSockets) {
    //       roomSockets.forEach((socketId) => {
    //         io.sockets.sockets.get(socketId)?.leave(room);
    //       });
    //     }
    //   });
      
});

server.on('error', (err) => {
    console.error('Server error:', err);
});
  
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "",
    database: "blabbot_db",
});

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET","POST"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    key: "userId",
    secret: "@spireCutie12345",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    },
}))

app.get("/api/studconcerns",(req,res)=>{
    const sqlGet = "SELECT * FROM studcon_tb";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/roomlocation",(req,res)=>{
    const sqlGet = "SELECT * FROM roomlocations_tb";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/disprep",(req,res)=>{
    const sqlGet = "SELECT * FROM distprep_tb";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/alumniaff",(req,res)=>{
    const sqlGet = "SELECT * FROM alumniaff_tb";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/miscellaneous",(req,res)=>{
    const sqlGet = "SELECT * FROM misc_tb";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/:_id/chat_requests",(req,res)=>{
    const progID = req.params._id;
    const sqlGet = `SELECT livechat_tb.*, user_tb._EmailAdd FROM livechat_tb JOIN user_tb ON livechat_tb.stud_id = user_tb._userID WHERE livechat_tb.progcoord_id=${progID} AND livechat_tb.status="pending"`;
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get('/api/progcoord/available', (req, res) => {
    const availableProgramCoordinators = "SELECT * FROM user_tb WHERE _userType=2";
    db.query(availableProgramCoordinators, (err, result) => {
        if (err) {
            res.json({ error: err.message });
        } else {
            res.json({ availableProgramCoordinators: result });
        }
    });
});
  
app.post('/accept/:_id',(req,res)=>{
    const reqStatus = req.body.status;
    const reqID = req.params._id;
    const query = `UPDATE livechat_tb SET status='${reqStatus}' WHERE request_id=${reqID}`
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error updating status');
            return;
        }
        res.send('Status updated successfully');
    })
})

app.post('/decline/:_id',(req,res)=>{
    const reqStatus = req.body.status;
    const reqID = req.params._id;
    const query = `UPDATE livechat_tb SET status='${reqStatus}' WHERE request_id=${reqID}`
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error updating status');
            return;
        }
        res.send('Status updated successfully');
    })    
})

// app.delete('/delete/decline',(req,res)=>{
//     const sqlGet = `DELETE FROM livechat_tb WHERE status='declined'`;
//     db.query(sqlGet,(err,result)=>{
//         res.send(result);
//     })
// })

app.post('/changepass',(req,res)=>{
  const newpassword = req.body.newpassword;
  const connewpassword = req.body.connewpassword;
  const currpassword = req.body.currpassword;

  const hashedPassword = crypto.createHash('sha256').update(currpassword).digest('hex');  

  if(connewpassword===newpassword){
  db.query(
    "SELECT * FROM user_tb WHERE _Password = ?",
    hashedPassword,
    (err,result) => {
        if(err){
            // res.send({err:err})
            res.send({message:'Incorrect Password'});
        }

        if(result.length > 0){
            const email = result[0]._EmailAdd;
            const query = `UPDATE user_tb SET _Password='${newpassword}' WHERE _EmailAdd='${email}'`;
            db.query(query,(err,result)=>{
              if(err){
                console.log(err);
              }
            })
        }
    }
  );
  }else{
    res.send({message:'Passwords do not match!'});
  }
})

app.post('/login', (req,res)=> {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user_tb WHERE _EmailAdd = ?",
        email,
        (err,result) => {
            if(err){
                res.send({err:err})
            }

            if(result.length > 0){
                const hashedPassword = crypto.createHash('sha256').update(password).digest('hex'); // hash the password
                if(hashedPassword === result[0]._Password){
                    req.session.user = result;
                    // console.log(req.session.user);
                    res.send(result);
                }else{
                    res.send({message: "Invalid Login Credentials!"});
                }
            }else{
                res.send({message: "User doesn't exist!"});
            }
        }
    );
}); 

app.get("/login",(req,res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})

// app.listen(3001, ()=>{
//     console.log("Server is running on port 3001");
// });


server.listen(3001, () => {
    console.log("Server is running on port 3001");
  });