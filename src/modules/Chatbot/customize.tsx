import React, { MouseEventHandler } from 'react'

const Customize = ({openC,onCloseC}:{openC:boolean,onCloseC:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
    if(!openC) return null
    return (
      <div>
          <div className='modalContCust'>
              <div className='topTitle'>
                <h1 className='sectionTitle'>Customize</h1>
                  <p onClick={onCloseC} className='closeBtn'>X</p>
              </div>  
          </div>
      </div>
    )
}

export default Customize