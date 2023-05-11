import React, { FC, useEffect, useRef, useState } from 'react'
import { io, Socket } from "socket.io-client";
import bot from "../../../assets/blabbot.png";
import userlogo from "../../../assets/usericon.png";
import ChatBubble from '../component/chatbubble';
import ChatStud from '../component/chatStud';
import Aboutcb from '../aboutcb';
import Botupdates from '../botupdates';
import Customize from '../customize';
import { FaRegPaperPlane } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

interface LivechatProps {
  socket: Socket;
  room: number;
  author: string;
  value?: boolean;
}

interface Message {
  author: string;
  room: number;
  message: string;
  time: string;
}

const Livechat: FC<LivechatProps> = ({ socket, room,author,value }) => {
  // console.log('socket:', socket);
  // console.log('roomID:', room);

  const history = useNavigate();

  const [currentMessage,setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [disc,setDisc]=useState(false);
  const [display,setDisplayButton]=useState(false);

  
  /*Customize*/
  const [butColor,setButColor]=useState('0054F8')
  const [plane,setPlane]=useState('white');
  const [inpColor,setInpColor]=useState('#4da6ff')
  const [change,setChange]=useState(false);
  useEffect(()=>{
    setChange(true);
  },[value])

  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      if (data.room === room) {
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket,room]);

  useEffect(()=>{
    const buttColor = sessionStorage.getItem('buttColor');
    const plane = sessionStorage.getItem('plane');
    const inpColor = sessionStorage.getItem('inpColor'); 
  
    if (buttColor !== null && plane!== null && inpColor !== null) {
      setButColor(buttColor);
      setPlane(plane);
      setInpColor(inpColor);
    }
  },[])

  const inputRef = useRef<HTMLInputElement>(null);
  
  const sendMessage = async (event: { preventDefault: () => void })=>{
    event.preventDefault();
    if(currentMessage!==""){
      const messageData = {
        author:author,
        room: room,
        message: currentMessage,
        time:new Date(Date.now()).getHours() + ":" +
            new Date(Date.now()).getMinutes(),
      };
      
      if (currentMessage.toLowerCase().includes("$end")) {
        setDisplayButton(true);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        socket.disconnect();
      } else {
        await socket.emit("send_message",messageData);
        setCurrentMessage("");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } 
    }
  };

  const stopChat = async () => {
    const messageData = {
      author:author,
      room: room,
      message: "Thank you for chatting with me! I am now about to leave the conversation. Type  $end or reload the page to leave the chat.",
      time:new Date(Date.now()).getHours() + ":" +
          new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_message",messageData);
    setDisc(true);
    socket.disconnect();
  };

  return (
    <>
          <div className='upperContB'>
            <div className="contentB" style={change===true ? {opacity:"1"}:{opacity:"1"}}>
              {author==='ProgCoord' && <p style={{textAlign:"center",marginTop:"1%",color:"gray"}}>Another user has entered the chat.</p>}
              {author==='Student' && <p style={{textAlign:"center",marginTop:"1%",color:"gray"}}>Live assistant has entered the chat.</p>}
            {messageList.map((messageContent)=>{
              return(
                <>
                {author === messageContent.author ?
                <div className='authorChat'> 
                <ChatStud message={messageContent.message}/>
                <div className='authorTime'>{messageContent.time}</div>
                </div>
                :
                <div className='otherChat'>
                <ChatBubble chatImage={userlogo} message={messageContent.message}/>
                <div className='otherTime'>{messageContent.time}</div>
                </div>
                }
              </>
              )
            })}
             {display && author==='Student' &&               
             <div style={{textAlign:"center"}}> 
                <h1 style={{margin:"1%"}}>Live assistant has left the conversation.</h1>
                <button onClick={()=> window.location.reload()}>Go Back to BlabBot</button>
              </div>}
             {disc && author==='ProgCoord' &&
              <div style={{textAlign:"center"}}> 
                <h1 style={{margin:"1%"}}>You ended the conversation.</h1>
                <button onClick={()=> window.location.reload()}>Go Back to Requests Page</button>
              </div>}
            </div>
          </div>
          <div className='lowerContB'>
            <div className="formCont" style={change===true ? {opacity:"1"}:{opacity:"1"}}>
              <form className="textForm" >
              <input id="input" type="text" placeholder="Send a Message..." 
              style={{border:"1px solid"+inpColor}}
              onChange={(event)=>{setCurrentMessage(event.target.value)}}
              onKeyDown={(event) => {event.key === "Enter" && sendMessage(event)}}
              ref={inputRef}/>
              </form>
            </div>
            
            <div className="submitBtnz" style={change===true ? {opacity:"1",display:'flex'}:{opacity:"1",display:'flex'}}  >
              {author === 'ProgCoord' &&
                  <button style={{backgroundColor:"red"}} onClick={stopChat}>Stop</button>
              }
              <button style={{color:plane,backgroundColor:butColor}} onClick={sendMessage}><FaRegPaperPlane onClick={sendMessage}/></button>
            </div>
          </div>      
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
export default Livechat
