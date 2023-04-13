import React, { MouseEventHandler } from 'react'

const Botupdates = ({openB,onCloseB}:{openB:boolean,onCloseB:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
  if(!openB) return null
  return (
    <div>
      <div className='overlay'>
        <div className='modalContUpd'>
            <div className='modalRightUpd'>
                <p onClick={onCloseB} className='closeBtn'>X</p>
                <div className='modalContentUpd'>
                    <p>Bot Updates</p>
                </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Botupdates