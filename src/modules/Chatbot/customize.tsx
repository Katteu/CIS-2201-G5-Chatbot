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
              <div className='themeHeader'>
                <h1 className='customTitle'>Hello Daddy UWU</h1>
              </div> 
              <div className='parentSect'>
                <div className='leftHalf'>
                  <div className='themeRow'>
                    <div className='defaultTheme'>
                    <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div className='cobaltTheme'>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div className='royaltyTheme'>
                    </div>
                  </div>
                </div>
                <div className='rightHalf'>
                  <div className='themeRow'>
                    <div className='forestmossTheme'>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div className='soyeclipseTheme'>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div className='fiestaredTheme'>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footerExit'>
              <p onClick={onCloseC} className='cancelBtn'>Cancel</p>
                <p onClick={onCloseC} className='saveBtn'>Save</p>
              </div>
          </div>
      </div>
    )
}

export default Customize