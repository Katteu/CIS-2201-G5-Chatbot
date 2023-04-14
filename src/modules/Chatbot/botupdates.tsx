import React, { MouseEventHandler } from 'react'

const Botupdates = ({openB,onCloseB}:{openB:boolean,onCloseB:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
  if(!openB) return null
  return (
    <div>
        <div className='modalContUpd'>
          <div className="topTitle">
            <h1 className='sectionTitle'>Bot Updates</h1>
            <p onClick={onCloseB} className='closeBtn'>X</p>
          </div>
          <div className="modalUpdLow" style={styleBU.content}>
            <i className="fas fa-solid fa-screwdriver fa-2xl" style={{marginTop:"20%",fontSize:"10em",color:"#001B4E"}}></i><br/><br/>
            <p>No new updates yet.</p>
          </div>
        </div>
    </div>
  )
}

export default Botupdates

const styleBU:any ={
  content:{
    textAlign: "center",
    marginRight: "2%",
  }
};