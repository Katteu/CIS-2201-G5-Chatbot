import React, { useEffect, useState } from 'react'
import usinglaptop from '../../assets/usinglaptop.png'
import stud from "../../assets/wave.png"
import '../Chatbot/assets/landing.css'
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import Preloader from '../Chatbot/component/preloader';

function Landing() {
  const [firstName, setFirstName] = useState('');
  
  useEffect(() => {
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
    }, []);

  return (
    <div>
      <div className='bodyLanding' style={{paddingTop:"12%"}}>
        {firstName ?
          <div>
            <img alt="Student Wave" className='studWave' src={stud} />
            <div className='pointTo'>
              <TbArrowBigUpLinesFilled style={styles.arrow}/>
              <h2>To start your experience,{"\n"} Click here!</h2>
            </div>
            <h1>Welcome, {firstName} !</h1>
            <p>This is the portal of our DCISM website. Everything starts here. Explore, share, and connect with us!</p>
          </div>
          :
          <div>
            {/* Insert here unsay iingon kung wa pa ka log in */}
            <div className="HeadTitle" style={{textAlign:'left', marginLeft: '2.5%', marginTop:'-2%'}}>
              <h1 className="firsttext" style={{fontSize:'125px'}}>WELCOME TO <br></br></h1>
              <h1 className="firsttext_1" style={{fontSize:'125px', marginLeft:'6.5%'}}>TECH OPS</h1>
              <h2 className="secondtext" style={{marginLeft:'3%'}}>Department of Computer, Information Science and Mathematics</h2>
              <br></br>
              <br></br>
              <br></br>
              <h1  className="thirdtext" style={{marginLeft:'17%'}}>Login now!</h1>
            </div>
            <div className='Pic' style={{textAlign: 'right'}}>
              <img id="Using-Laptop" src={usinglaptop} alt="USC Logo" style={{width:'100vh', marginTop:'-44vh'}} />
            </div>


            
          </div>
        }
      </div>
    </div>
  )
}

export default Landing

const styles: any = {
  arrow: {
    color: "#001B4E",
    fontSize: '2em',
    marginLeft: '80%',
  },
};