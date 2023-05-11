import React,{} from 'react'
import Axios from 'axios'
import '../Login/changepass.css'

const ChangePasscb = () => {
  
  return (
    <div className='budey'>
    <div className='ProfileBody'>
        <div className="rowzz"> 
          <div className='boxx'>
            <h1>Change Password</h1>
            <h3 className='passs'>Current Password</h3>
            <input type="password"  name="currpassword" id="passwords" className="form-control" placeholder="Current Password" autoComplete="off" required />
            <h3 className='passs'>New Password</h3>
            <input type="password"  name="newpassword" id="passwords" className="form-control" placeholder="Current Password" autoComplete="off" required/>
            <h3 className='passs'>Confirm New Password</h3>
            <input type="password"  name="confirmnewpassword" id="passwords" className="form-control" placeholder="Current Password" autoComplete="off" required/>
            <div className="form-group-btn">
                    <input type="submit" name="btnsignin" className="login-btn" value="Submit" style={{marginTop: '3%', marginLeft: '30%', textDecoration: "none", display: "inline-block", color: "white", border: "1px solid #002366", padding: "11px 24px", fontSize: "1.5em", position: "relative", background: "#002366", cursor: "pointer", fontWeight: "bold", fontFamily: "var(--bs-body-font-family)", borderRadius: "10px", width: "220px"}}/>
                </div>
          </div>

        </div>
    </div>
    </div>
  )
}

export default ChangePasscb

// onChange={(e) => {setPassword(e.target.value);}}