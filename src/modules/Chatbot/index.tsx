import React, { useEffect, useRef, useState } from 'react'
import "../Chatbot/assets/chatbot.css"
import "../Chatbot/assets/bubble.css"
import bot from "../../assets/blabbot.png";
import Aboutcb from './aboutcb';
import Botupdates from './botupdates';
import Customize from './customize';
import Chatbubble from './component/chatbubble';
import ChatStud from './component/chatStud';
import clogo from "../../assets/chatlogo.png";
import axios from "axios";
import Studconcern from './categories/studconcern';
import Roomlocation from './categories/roomlocation';
import Disasterprep from './categories/disasterprep';
import Alumniaff from './categories/alumniaff';
import Misc from './categories/miscellaneous';
import ProgCoord from './component/progcoord';
import { io, Socket } from "socket.io-client";
import Livechat from './categories/livechat';
import { FaRegPaperPlane } from 'react-icons/fa'
import Chatmenu from './component/chatmenu';
import Preloader from './component/preloader';
import Access from '../Landing/access';
import { StudCon, RoomLoc, DistPrep, AlumniAff, Miscellaneous } from './component/model';

const socket = io("http://localhost:3001");

function Chatbot() {
  let status = true;
  const [openModal,setOpenModal] = useState(false);
  const [openB,setOpenB] = useState(false);
  const [openC,setOpenC] = useState(false);
  const [label,setLabel]= useState<string|null>(null);
  const [butClick,setButClick] = useState<boolean>(false);

  /*To hold the data*/
  const [studData,setStudData] = useState<StudCon[]>([]);
  const [roomData,setRoomData] = useState<RoomLoc[]>([]);
  const [disData,setDisData] = useState<DistPrep[]>([]);
  const [alumnData,setAlumnData] = useState<AlumniAff[]>([]);
  const [miscData,setMiscData] = useState<Miscellaneous[]>([]);
  const [human,setHuman] = useState("");
  const [stay,setStay]=useState(0);

  /*To check what is clicked*/
  const [showStudConcern, setShowStudConcern] = useState(false);
  const [showRoomLoc, setShowRoomLoc] = useState(false);
  const [showDisPrep, setShowDisPrep] = useState(false);
  const [showAlumnAff, setShowAlumnAff] = useState(false);
  const [showMisc, setShowMisc] = useState(false);
  const [showHuman, setShowHuman] = useState(false);
  const [userType, setUserType] = useState(0);
  const [userID,setUserID] = useState(0);
  // const [loggedIn, setLoggedIn] = useState(false);

  /*Customize*/
  const [butColor,setButColor]=useState('0054F8')
  const [plane,setPlane]=useState('white');
  const [inpColor,setInpColor]=useState('#4da6ff')
  const [email,setEmail] = useState('');

  useEffect(()=>{
    const userIDStore = parseInt(sessionStorage.getItem('userID') || '');
    setUserID(userIDStore);
    const userStore = sessionStorage.getItem('email') || '';
    setEmail(userStore);
  },[email])

  let value=false;
  useEffect(()=>{
    const userStore = parseInt(sessionStorage.getItem('userType') || '');
    setUserType(userStore);

    const buttColor = sessionStorage.getItem('buttColor');
    const plane = sessionStorage.getItem('plane');
    const inpColor = sessionStorage.getItem('inpColor'); 

    if (buttColor !== null && plane!== null && inpColor !== null) {
      setButColor(buttColor);
      setPlane(plane);
      setInpColor(inpColor);
    }

    if(openModal===true || openB===true || openC===true){
      value=true;
    }

    if(showHuman){
      humanHandover();
    }else if(showStudConcern){
      studentConcerns();
    }else if(showRoomLoc){
      wayFinding();
    }else if(showDisPrep){
      disPrepared();
    }else if(showAlumnAff){
      alumniAffairs();
    }else if(showMisc){
      misc();
    }
  },[]);

  /*user Room ID*/
  const [roomID,setRoomID] = useState(0);
  const [room,setRoom] = useState(false);
  const [decline,setDecline]=useState(false);

  // if(!loggedIn){
  //   return <p>Login First</p>;
  // }
  
  const humanHandover = async () => {
    if(!butClick){
      setLabel("Human Handover");
      setTimeout(() => setShowHuman(true), 500); 
      try {
        setTimeout(() => {
          // console.log("Bye");
          socket.emit("chat_request", userID,(result: {status: string,req_ID: number})=>{
            if(result.status==='accepted'){
              setHuman("A live assistant is ready to chat with you now.");
              // console.log(human);
              setTimeout(()=>setStay(1),1500);
              setTimeout(() => {
                setRoomID(result.req_ID);
                socket.emit('join_room',roomID);
              }, 1000); 
            }else if(result.status==='declined'){
              setHuman("There is no available live assistant as of the moment.");
              setTimeout(()=>setStay(2),1500);
              setDecline(true);
            }
          });
        }, 2500);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
  };

  // const [load,setLoad]=useState(true);
  const liveChat = async () =>{
    // setTimeout(()=>setLoad(false),1500);
    setTimeout(() => setRoom(true), 500);
  };

  const studentConcerns = async () => {
    if(!butClick){
      setLabel("Student Concerns");
      setButClick(true);
      const response = await axios.get("http://localhost:3001/api/studconcerns");
      setStudData(response.data);
      setTimeout(() => setShowStudConcern(true), 1500); 
    }
  };

  const wayFinding = async () => {
    if(!butClick){
      setLabel("Room Locations");
      setButClick(true);
      const response = await axios.get("http://localhost:3001/api/roomlocation");
      setRoomData(response.data);
      setTimeout(()=> setShowRoomLoc(true),1500);
    }
  };

  const disPrepared = async () => {
    if(!butClick){
      setLabel("Disaster Preparedness");
      setButClick(true);
      const response = await axios.get("http://localhost:3001/api/disprep");
      setDisData(response.data);
      setTimeout(()=> setShowDisPrep(true),1500);
    }
  };

  const alumniAffairs = async () => {
    if(!butClick){
      setLabel("Alumni Affairs");
      setButClick(true);
      const response = await axios.get("http://localhost:3001/api/alumniaff");
      setAlumnData(response.data);
      setTimeout(()=> setShowAlumnAff(true),1500);
    }
  };

  const misc = async () => {
    if(!butClick){
      setLabel("Miscellaneous");
      setButClick(true);
      const response = await axios.get("http://localhost:3001/api/miscellaneous");
      setMiscData(response.data);
      setTimeout(()=> setShowMisc(true),1500);
    }
  };

  const buttons = [
    { label: "Human Handover", onClick: humanHandover },
    { label: "Student Concerns", onClick: studentConcerns },
    { label: "Wayfinding or Room Location", onClick: wayFinding },
    { label: "Disaster Preparedness", onClick: disPrepared },
    { label: "Alumni Affairs", onClick: alumniAffairs },
    { label: "Miscellaneous", onClick: misc },
  ];

  const laybeuChat = [
    { label: "Proceed to Live Chat", onClick: liveChat },
  ];

  return (
    <>
    {email!=='' ?
    <>
    <div className='cbCont'>
      <div className='containerA' style={openModal==true || openB==true || openC==true? {opacity:'0.2'}:{opacity:'1'}}>
        <div className='upperCont'>
          <img alt="Blab Bot" src={bot} style={styleCB.bot}/>
           <h1 className="slogan" style={styleCB.slogan}>Blabbot at</h1>
           <h1 className="slogan" style={styleCB.slogan}>your service!</h1>
            <p className="para" style={styleCB.para}> Have a question? Ask away or explore our options</p>
        </div>
        <hr id="lineCB" style={{color:"White", marginLeft:"5%",marginRight:"5%"}}/>
        <div className='lowerCont'>
          {status
            ? <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                 <div style={styleCB.active}>ㅤ</div><p style={styleCB.message}>Bot is active!</p>
              </div> 
            : <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                  <div style={styleCB.inactive}>ㅤ</div> Bot is offline!
              </div> 
          }
          <div className='listCB'>
            <div style={{marginTop:"10%",marginBottom:"6%"}}>
              <a onClick={()=>setOpenC(true)} className='linkStl'> 
                <i className="fas fa-duotone fa-brush"></i> Customize <br/>
              </a>
            </div>
            <div style={{marginTop:"2%",marginBottom:"6%"}}>
              <a onClick={()=>setOpenB(true)} className='linkStl'> 
                <i className="fas fa-solid fa-bullhorn"></i> Bot Updates <br/>
              </a>    
            </div>
            <div style={{marginTop:"4%",marginBottom:"3%"}}>
              <a onClick={()=>setOpenModal(true)} className='linkStl'> 
                <i className='bx bxs-info-square'></i> About
              </a>            
            </div> 
          </div>
        </div>
      </div>

      <div className='containerB' >
      {userType===3 && room==false &&
         <>
          <div className='upperContB' >
            <div className="contentB" style={openModal==true || openB==true || openC==true? {opacity:'0.2'}:{opacity:'1'}}>
              <Chatbubble message="Great to see you here! I'm BlabBot and I'm here to assist you. How can I be of help to you today? 
                                  ㅤㅤHere are some choices that you can select:" 
                          buttons={buttons}
                          subtext={"Please let me know which option you would like to choose."}
                          chatImage={clogo}/>


              {label && <ChatStud message={label}/>}

               {/* Shows Student Concerns */}
               {showStudConcern && <Studconcern studData={studData}/>}
               {/* Shows Room Locations */}
               {showRoomLoc && <Roomlocation roomData={roomData}/>}
               {/* Shows Disaster Preparedness */}
               {showDisPrep && <Disasterprep disData={disData}/>}
               {/* Shows Alumni Affairs */}
               {showAlumnAff && <Alumniaff alumnData={alumnData}/>}
               {/* Shows Miscellaneous */}
               {showMisc && <Misc miscData={miscData}/>}

               {/* Starts Human Handover */}
               {showHuman && 
                <>
              <Chatbubble message="Please wait while I find someone to assist you..."
                          chatImage={clogo}/>                
                </>}

                {human && 
              <Chatbubble message={human}
                          chatImage={clogo}/>
              }

              {stay===1 && decline===false && 
              <Chatbubble message="Will connect you to the live assistant now."
                          buttonz={laybeuChat}
                          chatImage={clogo}/>}

            {stay===2 && <Chatmenu/>}

            </div>
          </div>
          
          <div className='lowerContB'>
            <div className="formCont" style={openModal==true || openB==true || openC==true? {opacity:"0.2"}:{opacity:"1"}}>
              <form  className="textForm" onSubmit={handleSubmit}>
              <input id="input" type="text" style={{border:"1px solid"+inpColor}} placeholder="Send a Message..."/>
              </form>
            </div>
            
            <div onClick={handleSubmit} className="submitBtn" 
                  style={openModal==true || openB==true || openC==true?{opacity:"0.2"}:{opacity:"1"}}>
              <button style={{color:plane,backgroundColor:butColor}} onClick={handleSubmit}>
                     <FaRegPaperPlane onClick={handleSubmit} onKeyDown={(event) => {event.key === "Enter" && event.preventDefault()}}/></button>
            </div>
          </div>
          </>
        }

        {userType===2 && room==false &&
              <ProgCoord/>
        }

        {room && <Livechat socket={socket} room={roomID} author="Student" value={value}/>}

      </div>
      
      <Aboutcb open={openModal} onClose={()=> setOpenModal(false)}/>
      <Botupdates openB={openB} onCloseB={()=> setOpenB(false)}/>
      <Customize openC={openC} onCloseC={()=> setOpenC(false)}/>
    </div>
    </>
    :<Access/>}
    </>
  )
}

const styleCB: any = {
  bot: {
    width: "60%",
    marginBottom:"2%",
  },

  message:{
    color: "White",
    margin: "0",
    fontSize:"1.1em",
    fontFamily: "Montserrat",
    fontWeight: "600",
  },
  active:{
    width: "9%",
    height: "100%",
    backgroundColor: "#28d700",
    borderRadius: "50%",
    marginRight: "2%",
  },
  inactive:{
    width: "9%",
    height: "100%",
    backgroundColor: "gray",
    borderRadius: "50%",
    marginRight: "2%",
  },
};

export default Chatbot