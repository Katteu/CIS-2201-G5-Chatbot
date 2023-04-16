import React, { MouseEventHandler } from 'react'
import botlogo from "../../assets/logoblue.png";
import dcism from "../../assets/circle-logo.png";


const Aboutcb = ({open,onClose}:{open:boolean,onClose:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
    if(!open) return null

  return (
    <div>
        <div className='modalContAbout'>
            <div className='topTitle'>
                <h1 className='sectionTitle'>About The Bot</h1>  
                <p onClick={onClose} className='closeBtn'>X</p>
            </div>
            <div className='modalAboutLow'>
                <img alt="Blab Bot Logo" src={botlogo} className='botlogo'/> 
                <hr style={{width:"80%"}}/>
                <img alt="Blab Bot" src={dcism} className='difflogo' style={{float:'left'}}/> 
                <p className='aboutPara'>
                BlabBot is an innovative DCISM (Department of Computer, Information Sciences and Mathematics) chatbot designed to meet the academic needs of students. As a fast and accurate information provider, BlabBot is dedicated to answering questions related to courses, schedules, faculty, fees, and other academic inquiries. With its advanced technology, BlabBot caters to the diverse needs of students in a timely manner, making sure that users can access relevant information quickly and easily. As a result, BlabBot provides a reliable source of information to support students in their academic endeavors, enabling them to make informed decisions about their courses, schedules, and other academic pursuits.
                </p>
                <hr style={{width:"80%"}}/>
                <h2 className='contTitle'style={styleAbout.get}><span style={{textDecoration: "underline"}}>GET IN TOUCH</span>👇🏼</h2>
                <div className='contactPart' style={styleAbout.contactPart}>
                    <div className="number" style={styleAbout.number}>
                        <i className="fas fa-solid fa-phone fa-flip-horizontal" style={styleAbout.contactlogo}></i>
                        <h4 style={styleAbout.contact}>Talamban Campus: </h4>
                        <p style={{marginLeft:"1%",marginTop:"0%"}}>(032)230-0100</p>
                    </div>
                    <div className="email" style={styleAbout.email}>
                        <i className="fas fa-solid fa-envelope" style={styleAbout.emaillogo}></i>
                        <h4 style={styleAbout.contact}>DCISM Secretary: </h4>
                        <p style={{marginLeft:"1%",marginTop:"0%"}}>dcissec@usc.edu.ph</p>
                        <br/>
                    </div>

                </div>
                <div className='contactPart' style={styleAbout.contactPart}>
                    <div className="number" style={styleAbout.number}>
                    <i className="fas fa-solid fa-address-book" style={styleAbout.contactlogo}></i>
                        <h4 style={styleAbout.contact}>DCISM: </h4>
                        <p style={{marginLeft:"1%",marginTop:"0%"}}>(032)230-0100 Local 158</p>
                    </div>
                    <div className="email" style={styleAbout.email}>
                        <i className="fas fa-solid fa-inbox" style={styleAbout.emaillogo}></i>
                        <h4 style={styleAbout.contact}>CISCO: </h4>
                        <p style={{marginLeft:"1%",marginTop:"0%"}}>dcism.sc@gmail.com</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcb

const styleAbout :any = {
    contactPart:{
        display:"flex",
        width:"100%",
        marginLeft:"10%",
        textAlign:"left",
        marginBottom: "0.5%",
    },
    contact:{
        margin:"0",
    },
    contactlogo:{
        marginTop:"1%",
        marginRight:"1%",
        color: "#001B4E",
        marginLeft:"2%",
    },
    emaillogo:{
        marginTop:"1%",
        marginRight:"1%",
        color: "#001B4E",
        marginLeft:"4%",
    },
};

