import React, { useState } from 'react'
import Axios from 'axios'
import dcismlogo from '../../assets/DCISM_LOGO.png'
import usclogo from '../../assets/USC-logo.png'
import usctc from '../../assets/USC-TC.jpg'
import '../Login/login.css'

const Logincb = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    };
  return (
        <div className='loginBody'>
            <div className="rowz" >
            <img id="USC-logo" src={usclogo} alt="USC Logo" style={{maxWidth:"30%",height:"auto",textAlign: "center"}}/>
            <img id="DCISM-logo" src={dcismlogo} alt="DCISM Logo" style={{maxWidth:"90%",height:"auto",textAlign: "center",marginLeft: "4%"}}/>
            <div className="welcome-sign">
                <h2 style={{fontSize: "2em", margin:"2%", color:"#002366"}}>TECHOPS CENTER</h2>
                <hr style={{height: "1px", backgroundColor: "black", border: "none", width:"80%" }}/>
                <p style={{fontSize:"1.5em",margin:"2%"}}>Login to Your Account</p>
                <form id="loginForm" autoComplete="off" method="get">
                    <div className="form-group">
                    <input type="email" onChange={(e) => {setUsername(e.target.value);}} name="schoolEmail" id="schoolEmail" className="form-control" placeholder="School Email" autoComplete="off" style={{width: "75%", padding: "8px", display: "inline-block", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", backgroundColor: "#EDF5F3 !important", fontSize:"1.1em"}} required/>
                    </div> 
                    <br/>
                    <div className="form-group">
                    <input type="password" onChange={(e) => {setPassword(e.target.value);}} name="password" id="password" className="form-control" placeholder="Password" autoComplete="off" required style={{width: "75%", padding: "8px", display: "inline-block", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", backgroundColor: "#EDF5F3 !important", fontSize:"1.1em"}}/>
                    </div>
                    <br/>
                    <div className="form-group-btn">
                        <input type="submit" onClick={login} name="btnsignin" className="login-btn" value="Login" style={{textDecoration: "none", display: "inline-block", color: "white", border: "1px solid #002366", padding: "11px 24px", fontSize: "1em", position: "relative", background: "#002366", cursor: "pointer", fontWeight: "bold", fontFamily: "var(--bs-body-font-family)", borderRadius: "10px", width: "220px"}}/>
                    </div>
                    <br/>
                    <div className="form-group">
                    <p>Forgot your password? Click <a href="signup.php" style={{textDecoration:"none", color:"#87a2f7", fontWeight: "bold"}}>here</a></p>
                    </div>
                    <br/>
                </form>
            </div>        
            </div>
        </div>
  )
}

export default Logincb