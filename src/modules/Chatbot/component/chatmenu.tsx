import React, { useEffect, useState } from 'react'
import ChatStud from './chatStud'
import Chatbubble from './chatbubble'
import Studconcern from '../categories/studconcern'
import clogo from "../../../assets/chatlogo.png"
import axios from "axios";
import Roomlocation from '../categories/roomlocation'
import Disasterprep from '../categories/disasterprep'
import Alumniaff from '../categories/alumniaff'
import Misc from '../categories/miscellaneous'
import { io , Socket} from "socket.io-client";
import { useNavigate } from 'react-router-dom'
import {StudCon,RoomLoc,DistPrep,AlumniAff,Miscellaneous} from './model'

const socket = io("http://localhost:3001");

const Chatmenu = () => {
    const navigate = useNavigate();

    const [label,setLabel]= useState<string|null>(null);
    const [butClick,setButClick] = useState<boolean>(false);
    const [mess,setMess]= useState<string|null>(null);

    /*To hold the data*/
    const [studData,setStudData] = useState<StudCon[]>([]);
    const [roomData,setRoomData] = useState<RoomLoc[]>([]);
    const [disData,setDisData] = useState<DistPrep[]>([]);
    const [alumnData,setAlumnData] = useState<AlumniAff[]>([]);
    const [miscData,setMiscData] = useState<Miscellaneous[]>([]);
    const [human,setHuman] = useState("");

    /*To check what is clicked*/
    const [showStudConcern, setShowStudConcern] = useState(false);
    const [showRoomLoc, setShowRoomLoc] = useState(false);
    const [showDisPrep, setShowDisPrep] = useState(false);
    const [showAlumnAff, setShowAlumnAff] = useState(false);
    const [showMisc, setShowMisc] = useState(false);
    const [showHuman, setShowHuman] = useState(false);
    const [userType, setUserType] = useState(0);
    const [userID,setUserID] = useState(0);

    useEffect(()=>{
      const userIDStore = parseInt(sessionStorage.getItem('userID') || '');
      setUserID(userIDStore);
    },[userID])

    useEffect(()=>{
      const userStore = parseInt(sessionStorage.getItem('userType') || '');
      setUserType(userStore);

      const updatedMessage = localStorage.getItem("message");
      setMess(updatedMessage);
      
      if(showHuman || mess==='Human Handover'){
        humanHandover();
      }else if(showStudConcern || mess==='Student Concerns'){
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

    useEffect(() => {
      localStorage.setItem("message", mess || '');
    }, [mess]);


    const humanHandover = async () => {
      if(!butClick){
        setLabel("Human Handover");
        setTimeout(()=> setShowHuman(true),1500);
      }
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

      const chatbotLoad = () => {
        window.location.reload();
      }

      const reload = [
        { label: "Access Human Handover", onClick: chatbotLoad },
      ];

  return (
    <div>
      <>
        <Chatbubble message="Here are some choices that you can select once again:" 
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
              <Chatbubble message="Click the button below to reload chatbot and access the Human Handover function."
                          buttonz={reload}
                          chatImage={clogo}/>                
                </>}
          </>
        </div>
  )
}

export default Chatmenu