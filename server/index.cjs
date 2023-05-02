const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "",
    database: "blabbot_db",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/studconcerns",(req,res)=>{
    const sqlGet = "SELECT * FROM studcon_tb";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.post('/login', (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM stud_tb WHERE _EmailAdd = ? AND _Password = ?",
        [username, password],
        (err,result) => {
            if(err){
                res.send({err:err})
            }
            if(result.length = 0){
                res.send(result);
            }else{
                res.send({message: "Wala"});
            }
        }
    );
}); 

// app.get("/",(req,res)=>{
//     const sqlInsert = "INSERT INTO contact (school_id,name,email) VALUES ('19103523','john doe','johndoe@gmail.com')";
//     db.query(sqlInsert,(err,res)=>{
//         if(err){
//             console.log("error",err);
//         }
//         console.log("result",res);
//         res.send("Lezgaw");
//     })
// })

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});


