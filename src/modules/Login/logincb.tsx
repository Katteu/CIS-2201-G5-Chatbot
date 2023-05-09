import React, { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import dcismlogo from '../../assets/DCISM_LOGO.png'
import usclogo from '../../assets/USC-logo.png'
import usctc from '../../assets/USC-TC.jpg'
import '../Login/login.css'

const Logincb = () => {
    const history = useNavigate();
    const[email, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[loginStatus,setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const login = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            }else{
                setLoginStatus(response.data[0]);
                // console.log(response.data[0]);
                sessionStorage.setItem("userID", response.data[0]._userID);
                sessionStorage.setItem("firstName", response.data[0]._FirstName);
                sessionStorage.setItem("lastName", response.data[0]._LastName);
                sessionStorage.setItem("email", response.data[0]._EmailAdd);
                sessionStorage.setItem("userType",response.data[0]._userType);
                history('/');
            }
        }).catch((error)=>{
            console.error(error);
        });
    };

    function redirectForgPass(){
        window.location.href = "/forgotpass";
    }

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((res)=>{
            if(res.data.loggedIn==true){
                setLoginStatus(res.data.user[0].email);
            }
        })
    },[])

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
                <p>Forgot your password? Click <a style={{textDecoration:"none", color:"#87a2f7", fontWeight: "bold", cursor: "pointer"}} onClick={redirectForgPass}>here</a></p>
                </div>
                <br/>
            </form>
        </div>        
        </div>
    </div>
  )
}

export default Logincb