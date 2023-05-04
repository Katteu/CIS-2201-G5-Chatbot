import React, { useEffect, useState } from 'react'
import stud from "../../assets/wave.png"
import '../Chatbot/assets/landing.css'
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

function Landing() {
  const [firstName, setFirstName] = useState('');
  
  useEffect(() => {
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
  }, []);

  return (
    <div>
      <div className='bodyLanding' style={{paddingTop:"12%"}}>
        <img alt="Student Wave" className='studWave' src={stud} />
        {firstName ?
          <div>
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