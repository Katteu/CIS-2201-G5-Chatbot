const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const crypto = require('crypto'); // import the crypto module

const cookieParser = require('cookie-parser');
const session = require('express-session');

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
                    console.log(req.session.user);
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

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});

