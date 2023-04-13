import React, { MouseEventHandler } from 'react'

const Customize = ({openC,onCloseC}:{openC:boolean,onCloseC:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
    if(!openC) return null
    return (
      <div>
        <div className='overlay'>
          <div className='modalContCust'>
              <div className='modalRightCust'>
                  <p onClick={onCloseC} className='closeBtn'>X</p>
                  <div className='modalContentCust'>
                      <p>Customize</p>
                  </div>
              </div>  
          </div>
        </div>
      </div>
    )
}

export default Customize