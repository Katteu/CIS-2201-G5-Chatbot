import React from 'react'
import Axios from 'axios'
import '../Login/profilestyle.css'


const Profilecb = () => {
 

  return (

    <div className='ProfileBody'>
      
        <div className="rowzz">  
        <div className='ProfilePic'>
              <div style={{width:'15vh', height:'15vh', backgroundColor:'#002366', borderRadius:'100px', textAlign:'center'}}><h1 style={{color:'white', paddingTop:'30%'}}>FO</h1></div>
        </div>
        <div className="profile-deets">
            <h2 className='h2-deets'>First Name</h2>
            <p className='p-deets'>Franz Casimir</p>
            <h2 className='h2-deets'>Last Name</h2>
            <p className='p-deets'>Ondiano</p>
            <h2 className='h2-deets'>Email Address</h2>
            <p className='p-deets'>19104001@usc.edu.ph</p>
            <h2 className='h2-deets'>User Type</h2>
            <p className='p-deets'>Student</p>
        </div>
        <div className='editbutton' style={{marginTop:'1%'}}><button style={{backgroundColor:'#002366'}}>Edit Profile</button></div>

        </div>

    </div>

    
  )
}

export default Profilecb