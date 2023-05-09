import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillWechat, AiFillBell } from 'react-icons/ai'
import { io, Socket } from "socket.io-client";
import Livechat from '../categories/livechat';
import '../assets/request.css'

const socket = io("http://localhost:3001");

interface Request{
    request_id:number;
    progcoord_id:number;
    stud_id:number;
    status:string;
    created_at: Date;
    _EmailAdd: string;

}

function ProgCoord(){
    const [reqs,setReqs]=useState<Request[]>([]);
    const [progID,setProgID] = useState(0);
    const [reqID,setReqID] = useState(0);
    const [proceed,setProceed]= useState(false);
    const [showLive,setLiveChat] = useState(false);

    useEffect(() => {
        const progCoord = parseInt(sessionStorage.getItem('userID') || '');
        setProgID(progCoord);
      }, []);
      
      useEffect(() => {
        const intervalId = setInterval(getRequests, 500); // Fetch new requests every 5 seconds
        return () => clearInterval(intervalId); 
      }, [progID]);
      

    const getRequests = async ()=>{
        const res = await axios.get(`http://localhost:3001/api/${progID}/chat_requests`);
        setReqs(res.data);
    }

    const acceptChat = async(index:number)=>{
        const request_id = reqs[index].request_id;
        await axios.post(`http://localhost:3001/accept/${request_id}`,{
            status: "accepted"
        });
        setTimeout(()=> {
            setReqID(request_id);
            setProceed(true)
        },1500);
    }

    const declineChat = async(index:number)=>{
        const request_id = reqs[index].request_id;
        await axios.post(`http://localhost:3001/decline/${request_id}`,{
            status: "declined"
        });
        window.location.reload();
    }

    return(

        <div>
            {proceed===false && showLive===false &&
            <div className='containerPend'>
            <div className='Pending' style={{ marginBottom: "10px" }}>
                <div className='out' style={{ display: 'flex'}}>
                    <div className='pending'>
                        <h3>Pending Chat Requests</h3>
                    </div>
                    <div className='bubbless' style={{ marginTop: '1.2em' }}>
                        <AiFillWechat style={{ fontSize: '3em' }} />
                    </div>
                </div>
                <hr style={{ margin:"0 2vh"}}></hr>
            </div>

            

            {reqs && reqs.map((req,index)=>(
                <>
                <div className='outer'>
                        <div className="Bell" style={{ color: 'orange' }}>
                            <AiFillBell style={{ fontSize: '4em', margin: "0", marginTop: '0.25em' }} />
                        </div>
                        <div className='Contents'>
                            <h2 style={{ marginLeft: "1%", marginBottom: '0' }}>{req._EmailAdd}</h2>
                            <p>Someone is requesting for your assistance...</p>
                        </div>
                        <div className='AcceptDecline'>
                            <button onClick={()=>acceptChat(index)} className='Accept' style={{ marginRight: '3%' }}>Accept</button>
                            <button onClick={()=>declineChat(index)}style={{ backgroundColor: 'gray' }}>Decline</button>
                        </div>
                </div>
                <hr style={{ marginLeft: "2vh", marginRight: "2vh" }} />
                </>
            ))}
            </div>
            }

            {proceed===true && showLive===false ?
            <div className='progToLive'>
                <h2>Click to proceed</h2>
                <button onClick={()=>setLiveChat(true)}>Proceed to live chat</button>
            </div>
            :null}
            

            {showLive && <Livechat socket={socket} room={reqID} author="ProgCoord"/>}
        </div>
         
    )
}

export default ProgCoord;