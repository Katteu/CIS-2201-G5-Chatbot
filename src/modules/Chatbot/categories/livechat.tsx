import React, { FC, useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";
import ChatBubble from '../component/chatbubble';
import ChatStud from '../component/chatStud';

interface LivechatProps {
  socket: Socket;
  room: number;
  author: string;
}

interface Message {
  author: string;
  room: number;
  message: string;
  time: string;
}

const Livechat: FC<LivechatProps> = ({ socket, room,author }) => {
  const [openModal,setOpenModal] = useState(false);
  const [openB,setOpenB] = useState(false);
  const [openC,setOpenC] = useState(false);

  const [currentMessage,setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      if (data.room === room) {
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket]);

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
      
      console.log('Sending message:', messageData);
      await socket.emit("send_message",messageData);
      // setMessageList((list) => [...list, messageData]);
      setCurrentMessage(" ");
    }
  };


  return (
    <>
          <div className='upperContB' >
            <div className="contentB" style={openModal==true || openB==true || openC==true? {opacity:'0.2',backgroundColor:"rgba(0,0,0,0.5)"}:{opacity:'1'}}>
            {messageList.map((messageContent)=>{
              return(
                <>
                {author === messageContent.author ?
                <> 
                <ChatStud message={messageContent.message}/>
                <div>{messageContent.time}</div>
                </>
                :
                <>
                <ChatBubble message={messageContent.message}/>
                <div>{messageContent.time}</div>
                </>
                }
                

              </>
              )
            })}
            </div>
          </div>
          <div className='lowerContB'>
            <div className="formCont" style={openModal==true || openB==true || openC==true? {opacity:"0.2"}:{opacity:"1"}}>
              <form className="textForm" >
              <input id="input" type="text" placeholder="Send a Message..." 
              onChange={(event)=>{setCurrentMessage(event.target.value)}}
              onKeyDown={(event) => {event.key === "Enter" && sendMessage(event)}}/>
              </form>
            </div>
            
            <div className="submitBtn" style={openModal==true || openB==true || openC==true? {opacity:"0.2"}:{opacity:"1"}}>
              <button onClick={sendMessage}></button>
              {/* <i onClick={sendMessage} className="fa fa-paper-plane"></i> */}
            </div>
          </div>       
    </>
  )
}

export default Livechat
