import React, { useEffect, useState } from 'react'
import ChatStud from './chatStud'
import Chatbubble from './chatbubble'
import Studconcern from '../categories/studconcern'
import clogo from "../../../assets/chatlogo.png"
import axios from "axios";

const Chatmenu = () => {
    const [studData,setStudData] = useState<StudCon[]>([]);
    const [label,setLabel]= useState<string|null>(null);
    const [butClick,setButClick] = useState<boolean>(false);

    /*To check what is clicked*/
    const [showStudConcern, setShowStudConcern] = useState(false);

      /*for useEffect*/
    const [studState,setStudCon] = useState(false);
    useEffect(()=>{
        if(studState){
          studentConcerns();
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
          setStudCon(true);
          setTimeout(() => setShowStudConcern(true), 1500); 
        }
      };
    
      const wayFinding = () => {
        console.log("Button 2 clicked!");
      };
    
      const disPrepared = () => {
        console.log("Button 2 clicked!");
      };
    
      const alumniAffairs = () => {
        console.log("Button 2 clicked!");
      };
    
      const misc = () => {
        console.log("Button 2 clicked!");
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

              {/* Shows Student Concerns */}
               {label && <ChatStud message={label} chatImage="S"/>}
               {showStudConcern && <Studconcern studData={studData}/>}
        </div>
  )
}

export default Chatmenu