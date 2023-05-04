import React, { useEffect, useState } from 'react'
import ChatStud from './chatStud'
import Chatbubble from './chatbubble'
import Studconcern from '../categories/studconcern'
import clogo from "../../../assets/chatlogo.png"
import axios from "axios";
import Roomlocation from '../categories/roomlocation'
import Disasterprep from '../categories/disasterprep'
import Alumniaff from '../categories/alumniaff'
import Miscellaneous from '../categories/miscellaneous'

const Chatmenu = () => {
    const [label,setLabel]= useState<string|null>(null);
    const [butClick,setButClick] = useState<boolean>(false);

    /*To hold the data*/
    const [studData,setStudData] = useState<StudCon[]>([]);
    const [roomData,setRoomData] = useState<RoomLoc[]>([]);
    const [disData,setDisData] = useState<DistPrep[]>([]);
    const [alumnData,setAlumnData] = useState<AlumniAff[]>([]);
    const [miscData,setMiscData] = useState<Miscellaneous[]>([]);

    /*To check what is clicked*/
    const [showStudConcern, setShowStudConcern] = useState(false);
    const [showRoomLoc, setShowRoomLoc] = useState(false);
    const [showDisPrep, setShowDisPrep] = useState(false);
    const [showAlumnAff, setShowAlumnAff] = useState(false);
    const [showMisc, setShowMisc] = useState(false);
    const [human,setHuman] = useState(false);

    useEffect(()=>{
      if(human){
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

    const humanHandover = async () => {
      if(!butClick){
        setLabel("Human Handover");
        setButClick(true);
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
  return (
    <div>
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
               {showMisc && <Miscellaneous miscData={miscData}/>}
        </div>
  )
}

export default Chatmenu