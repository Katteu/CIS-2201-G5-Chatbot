import React, { useContext, useEffect, useRef, useState } from 'react'
import Chatbubble from '../component/chatbubble';
import clogo from "../../../assets/chatlogo.png";
import ChatStud from '../component/chatStud';
import Chatmenu from '../component/chatmenu'
import { StudCon } from '../component/model';
import { FaRegPaperPlane } from 'react-icons/fa'
import { MessageContext, booleanContext } from '..';
import axios from 'axios';

const Studconcern = ({studData}:{studData: StudCon[]}) => {
  /*To check what is clicked*/
  const [selectedItem, setSelectedItem] = useState<StudCon | null>(null);
  const [showQues, setShowQues] = useState<StudCon | null>(null);

  /*Determines what is clicked*/
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [buttonClicked2,setButtonClicked2] = useState<boolean>(false);
  const [contChat,setContChat] = useState(false);
  const [contChat2,setContChat2] = useState<string|null>(null);
  const [contChat3,setContChat3] = useState<string|null>(null);
  const [ask,setAsk] = useState(false);
  const [menuz,setMenuz] = useState(false);
  const [end,setEnd] = useState(false);

  const currentMessage = useContext(MessageContext);
  let boolVal = useContext(booleanContext);


  useEffect(()=>{
    if(boolVal===true && currentMessage!==''){
      sendMess();
    }
  },[boolVal]);

  const [error,setError]=useState("");

  const sendMess = async () =>{
    let proc = "Proceed to Menu".toLowerCase();
    let goback = "Go back to Previous Questions".toLowerCase();
    let stop = "Stop Chatting".toLowerCase();
    
    if(menuz===false){
      switch(currentMessage.toLowerCase()){
        case proc:
          proceedMenu();
          break;
        case goback:
          prevQues();
          break;
        case stop:
          stopChatting();
          break;
        default:
          try {
            let misij = currentMessage.toLowerCase();
            const response = await axios.get(`http://localhost:3001/api/${encodeURIComponent(misij)}/studcon`);
            if(response.status===200 && response.data.length!==0){
              handleButtonClick(response.data[0]._SCID);
            }else{
                if(contChat3===null && menuz===false){
                  setContChat3(currentMessage);
                  setError("You have entered an incorrect input. To prevent spamming errors, you are restricted to input another message. Reload the chat bot again.");
                }
            }
          } catch (error) {
            // Handle any errors
          }
          break;
      }
    }

  }

  const handleButtonClick = (id: number) => {
    if(!buttonClicked){
      const item = studData.find((item) => item._SCID === id);
      setShowQues(item || null);
      setTimeout(() => setSelectedItem(item ||null), 1000);
      setTimeout(() => setContChat(true), 3000); 
      setButtonClicked(true);
    }
  };

  const stopChatting = () => {
    if(!buttonClicked2){
      setContChat2("Stop Chatting");
      setTimeout(() => setEnd(true), 900); 
      setButtonClicked2(true);
    }
  }

  const proceedMenu = () => {
    if(!buttonClicked2){
      setContChat2("Proceed to Menu");
      setTimeout(() => setMenuz(true), 900); 
      setButtonClicked2(true);
    }
  }

  const prevQues = () => {
    if(!buttonClicked2){
      setContChat2("Go back to Previous Questions");
      setTimeout(() => setAsk(true), 500); 
      setButtonClicked(false);
      setButtonClicked2(true);
    }
  }

  const choices = [
    { label: "Proceed to Menu", onClick: proceedMenu },
    { label: "Go back to Previous Questions", onClick: prevQues },
    { label: "Stop Chatting", onClick: stopChatting },
  ];

  return (
      <div>
        <Chatbubble message="You may click or type your desired question:"
                    chatImage={clogo}
                    buttonz={
                      studData.map((item, i) => ({
                        label: item._Question,
                        onClick: () => handleButtonClick(item._SCID),
                        "data-id": item._SCID,
                        key: i
                      }))
                    }
        />

        {showQues && (
          <ChatStud message={showQues?._Question}/>
        )}
        {selectedItem && (
          <Chatbubble chatImage={clogo} message={selectedItem._Response} />
        )}

        {contChat && (
            <Chatbubble message="Do you want to continue chatting?"
            chatImage={clogo}
            buttonz={choices}  /> 
        )}

        {contChat2 && (
          <ChatStud message={contChat2}/>
        )}

       {/* Error Handling */}
        {contChat3 && !contChat && (
            <ChatStud message={contChat3}/>
        )}

        {error && !contChat && <Chatbubble message={error} chatImage={clogo}/>}

        {menuz && (<Chatmenu/>)}

        {ask && (
          <Studconcern studData={studData}/>
        )}
        {end && (
          <Chatbubble chatImage={clogo} message="Thanks for chatting with me today! Don't hesitate to come back if you have more questions." />
        )}
      </div>
  )
}

export default Studconcern;
