import React,{ useEffect, useState } from 'react'
import Axios from 'axios'
import '../Login/changepass.css'
import { useNavigate } from 'react-router-dom'

const ChangePasscb = () => {
  const navigate = useNavigate();
  const [currPass,setCurrPass] = useState("");
  const [newPass,setNewPass] = useState("");
  const [conNewPass,setConNewPass] = useState("");
  const [email,setEmail] = useState('');

  useEffect(()=>{
    const userStore = sessionStorage.getItem('email') || '';
    setEmail(userStore);
  },[email])


  const changePass = ()=>{
    event?.preventDefault();
    Axios.post("http://localhost:3001/changepass", {
      newpassword: newPass,
      connewpassword: conNewPass,
      currpassword: currPass,
      email:email,
    }).then((response)=>{
      if(response.data.message){
        if(response.data.message!==''){
          alert(response.data.message);
        }
      }else{
        alert('Successfully changed password!');
        navigate('/profile');
      }
    }).catch((error)=>{
      console.error(error);
    })
    
  }

  return (
    <div className='budey'>
    <div className='ProfileBody'>
        <div className="rowzzz"> 
          <div className='boxx'>
            <h1>Change Password</h1>
            <h3 className='passs'>Current Password</h3>
            <input type="password"  name="currpassword" id="passwords" className="form-control" 
                  placeholder="Type current password..." autoComplete="off" required 
                  onChange={(e) => {setCurrPass(e.target.value);}}/>
            <h3 className='passs'>New Password</h3>
            <input type="password"  name="newpassword" id="passwordss" className="form-control" 
                  placeholder="Type new password..." autoComplete="off" required
                  onChange={(e) => {setNewPass(e.target.value)}}/>
            <h3 className='passs'>Confirm New Password</h3>
            <input type="password"  name="confirmnewpassword" id="passwordsss" className="form-control" 
                  placeholder="Type new password again..." autoComplete="off" required
                  onChange={(e) => {setConNewPass(e.target.value)}}/>
                  <button className='sumb' onClick={changePass}>Submit</button>
          </div>

        </div>
    </div>
    </div>
  )
}

export default ChangePasscb

// onChange={(e) => {setPassword(e.target.value);}}