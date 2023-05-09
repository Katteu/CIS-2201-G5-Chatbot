import React, { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import dcismlogo from '../../assets/DCISM_LOGO.png'
import forgotPass from '../../assets/forgot.png'
import '../Login/login.css'
import '../Login/forgotpass.css'
import '../Login/layer1.svg'


const ForgotpassCB = () => {
    const history = useNavigate();
    const[email, setUsername] = useState("");
    const[loginStatus,setLoginStatus] = useState("");
    
    function forgotpass(){
        //Write code for forgot password
    }

    function redirectLogin(){
        window.location.href = "/login";
    }

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((res)=>{
            if(res.data.loggedIn==true){
                setLoginStatus(res.data.user[0].email);
            }
        })
    },[])

  return (
    <div className = "forgpassBody">
        <div className='forgBox'>
            <div className='box left-side'>
            <img id="Forgot-face" src={forgotPass} alt="Forgot Face" style={{maxWidth:"100%",height:"auto",textAlign: "center"}}/>
            </div>
            <div className='box right-side'>
            <h1>Forgot</h1>
            <h1 className='bottom-header'>Your Password?</h1>
            <form id="loginForm" autoComplete="off" method="get">
                <div className="form-group">
                <input type="email" onChange={(e) => {setUsername(e.target.value);}} name="schoolEmail" id="schoolEmail" className="form-control" placeholder="School Email" autoComplete="off" style={{width: "65%", padding: "8px", display: "inline-block", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", backgroundColor: "#EDF5F3 !important", fontSize:"1.1em"}} required/>
                </div> 
                <br />
                <div className="form-group-btn">
                    <input type="submit" onClick={forgotpass} name="btnvery" className="verify-btn" value="Reset Password" style={{textDecoration: "none", display: "inline-block", color: "white", border: "1px solid #002366", padding: "11px 24px", fontSize: "1em", position: "relative", background: "#002366", cursor: "pointer", fontWeight: "bold", fontFamily: "var(--bs-body-font-family)", borderRadius: "10px", width: "65%", margin: "0px 0px 30px 0px"}}/>
                </div>
                <a style={{textDecoration:"none", color:"#87a2f7", fontWeight: "bold", cursor: "pointer", padding: "10px"}} onClick={redirectLogin}>Return to Login</a>
            </form>
            </div>
        </div>
        <div className='spacer layer1'></div>
        <section className='bottom-section'>   
        </section>
        
    </div>
  )
}

export default ForgotpassCB;