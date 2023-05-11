import React,{ useEffect, useState} from 'react'
import Axios from 'axios'
import '../Login/profilestyle.css'
import profdes from '../../assets/profdes.png'


const Profilecb = () => {

  let status = true;

  const [email, setEmail] = useState("");
  const [lName, setlName] = useState("");
  const [fName, setfName] = useState("");
  const [userID,setUserID] = useState(0);
  const [userType,setUserType] = useState("");

  useEffect(()=>{
  const userIDStore = parseInt(sessionStorage.getItem('userID') || '');
  const firstNameStore = sessionStorage.getItem('firstName') || '';
  const lastNameStore = sessionStorage.getItem('lastName') || '';
  const emailStore = sessionStorage.getItem('email') || '';
  const userType =  parseInt(sessionStorage.getItem('userType') || '');
  setUserID(userIDStore);
  setfName(firstNameStore);
  setlName(lastNameStore);
  setEmail(emailStore);
  if(userType === 1){
    setUserType("System Administrator");
  }if(userType === 2){
    setUserType("Program Coordinator");
  }else{
    setUserType("Student");
  }
  },[])

  const Fletter = fName.substring(0,1);
  const Lletter = lName.substring(0,1);
  const tempProf = Fletter.concat(Lletter);

  function redirectToChangePass(){
    window.location.href = "/changepass";
  }
  
  return (
    <div className='budey'>
    <div className='ProfileBody'>
        <div className="rowzz">  
          <div className='ProfilePic'>
                <div style={{width:'15vh', height:'15vh', backgroundColor:'#002366', borderRadius:'100px', textAlign:'center'}}>
                  <h1 style={{color:'white', padding:'30% 0 0 0', margin:"0"}}>{tempProf}</h1>
                </div>
                <div style={{display: "flex"}} className='tempName'>
                  <h2>{userType}</h2>
                </div>
                <div style={{display: "flex"}}>
                  <a className='logoutbtn'>
                    <div className='box'>
                      <div className='innerbox'><h4 className='btntext'>Change Password</h4></div>
                      </div>
                  </a> 
                </div>
          </div>
          <div className="profile-deets">
              <h3>Information</h3>
              <h2>First Name</h2>
              <p>{fName}</p>
              <h2>Last Name</h2>
              <p>{lName}</p>
              <h2>Email Address</h2>
              <p>{email}</p>
          </div>
          <div className='sideDiv'>
            <img src={profdes} alt="Prof Desing" style={{maxWidth: "50vh", maxHeight: "auto"}} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Profilecb