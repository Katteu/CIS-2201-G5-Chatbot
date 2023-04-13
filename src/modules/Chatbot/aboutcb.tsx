import React, { MouseEventHandler } from 'react'


const Aboutcb = ({open,onClose}:{open:boolean,onClose:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
    if(!open) return null

  return (
    <div className='overlay'>
        <div className='modalContAbout'>
            <div className='modalRightAbout'>
                <p onClick={onClose} className='closeBtn'>X</p>
                <div className='modalContent'>
                    <p>About Da Bot</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Aboutcb