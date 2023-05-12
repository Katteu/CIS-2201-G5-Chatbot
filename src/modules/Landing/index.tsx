import React, { useEffect, useState } from 'react'
import usinglaptop from '../../assets/laptophuman.png'
import stud from "../../assets/wave.png"
import '../Chatbot/assets/landing.css'
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import Preloader from '../Chatbot/component/preloader';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
    }, []);

  return (
    <div className='budey'>
      <div className='bodyLanding' style={ firstName ? {paddingTop:"12%"}: {paddingTop:"8.3%"}}>
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
          <div className='landingDes'>
            <div className="HeadTitle">
              <h1 className="firsttext" >Welcome to Tech Ops!</h1>
              <h2>Department of Computer, Information Sciences and Mathematics</h2>
              <img alt="Laptop with Humans" className='lappy' src={usinglaptop} />
              <p>Log in to witness an immersive and enriching experience!</p>
              <div className='buttonDiv' onClick={()=> navigate('/login')}>
                <a className="buttonLog btnLog1">Login Now<span>&#10230;</span></a>
              </div>
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