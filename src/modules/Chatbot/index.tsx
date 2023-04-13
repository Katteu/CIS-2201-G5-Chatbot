import React from 'react'
import "../Chatbot/chatbot.css"
import bot from "../../assets/blabbot.png";

function Chatbot() {
  let status = true;
  return (
    <div className='cbCont'>
      <div className='containerA'>
        <div className='upperCont'>
          <img alt="Blab Bot" src={bot} style={styleCB.bot}/>
           <h1 className="slogan" style={styleCB.slogan}>Blabbot at</h1>
           <h1 className="slogan" style={styleCB.slogan}>your service!</h1>
            <p className="para" style={styleCB.para}> Have a question? Ask away or explore our options</p>
        </div>
        <hr style={{color:"White", marginLeft:"5%",marginRight:"5%",marginTop:"40%"}}/>
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
              <i className="fas fa-duotone fa-brush"></i> Customize <br/>
            </div>
            <div style={{marginTop:"2%",marginBottom:"6%"}}>
              <i className="fas fa-solid fa-bullhorn"></i> Bot Updates <br/>
            </div>
            <div style={{marginTop:"4%",marginBottom:"3%"}}>
              <i className='bx bxs-info-square'></i> About            
            </div> 
          </div>
        </div>
      </div>
      <div className='containerB'>
          <div className='upperContB'>Insert Chat</div>
          <div className='lowerContB'>
            <div className="formCont">
              <form className="textForm">
              <input id="input" type="text" placeholder="Message"/>
              </form>
            </div>
            
            <div className="submitBtn">
              <button><i className="fa fa-paper-plane"></i></button>
            </div>
          </div>
      </div>
    </div>
  )
}

const styleCB: any = {
  bot: {
    width: "60%",
    marginBottom:"2%",
  },
  slogan:{
    fontSize:"1.8em",
    color: "White",
    fontWeight: "900",
    margin: "0",
  },
  para:{
    color: "White",
    margin: "0",
    fontSize:"1em",
    fontFamily: "Montserrat",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "3%",
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
  }
};

export default Chatbot