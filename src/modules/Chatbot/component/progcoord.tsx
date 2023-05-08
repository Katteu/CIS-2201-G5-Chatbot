import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillWechat, AiFillBell } from 'react-icons/ai'
import { io, Socket } from "socket.io-client";
import Livechat from '../categories/livechat';

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
            {proceed===false && showLive===false ?
            <>
            <div className='Pending' style={{ marginBottom: "10px" }}>
                <div className='out' style={{ display: 'flex', marginLeft: "3%" }}>
                    <div className='pending'>
                        <p style={{ marginLeft: "2vh", marginBottom: "0vh", marginRight: "0.3em", fontSize: "2vh" }}>Pending Chat Requests</p>
                    </div>
                    <div className='bubbless' style={{ marginTop: '1.2em' }}>
                        <AiFillWechat style={{ fontSize: '2em' }} />
                    </div>
                </div>
                <hr style={{ marginLeft: "2vh", marginRight: "2vh" }}></hr>
            </div>

            

            {reqs && reqs.map((req,index)=>(
                <>
                <div className='outer' style={{ display: 'flex', marginLeft: "3%" }}>
                        <div className="Bell" style={{ color: 'orange' }}>
                            <AiFillBell style={{ fontSize: '4em', margin: "0", marginTop: '0.25em' }} />
                        </div>
                        <div className='Contents' style={{ width: '67 %', marginTop: '0', marginBottom: '0' }}>
                            <h2 style={{ marginLeft: "1%", marginBottom: '0' }}>{req._EmailAdd}</h2>
                            <p style={{ marginLeft: "1%", margin: '0', fontSize: '1.2em' }}>Someone is requesting for your assistance.</p>
                        </div>
                        <div className='AcceptDecline' style={{ display: 'flex', margin: '2%' }}>
                            <button onClick={()=>acceptChat(index)} className='Accept' style={{ marginRight: '5%' }}>Accept</button>
                            <button onClick={()=>declineChat(index)}style={{ backgroundColor: 'gray' }}>Decline</button>
                        </div>
                </div>
                <hr style={{ marginLeft: "2vh", marginRight: "2vh" }} />
                </>
            ))}
            </>
            : 
            <>
            Click to proceed
            <button onClick={()=>setLiveChat(true)}>Proceed to live chat</button>
            </>
            }

            {showLive && <Livechat socket={socket} room={reqID} author="ProgCoord"/>}
        </div>
         
    )
}

export default ProgCoord;