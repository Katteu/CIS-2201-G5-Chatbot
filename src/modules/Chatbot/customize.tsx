import React, { MouseEventHandler, useContext, useState } from 'react'
import {BsFillPaletteFill,BsFillBrushFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Customize = ({openC,onCloseC}:{openC:boolean,onCloseC:MouseEventHandler<HTMLParagraphElement> | undefined}) => {
    if(!openC) return null
    const navigate = useNavigate();
    const [mess,setMess]=useState(false);

    const defaultChange = () =>{
      sessionStorage.setItem('otherChat',"#8dd8ff");
      sessionStorage.setItem('otherChatp',"#002366");
      sessionStorage.setItem('chatStud',"#013fa6"); 
      sessionStorage.setItem('chatStudp',"white");
      /*Lower Part*/  
      sessionStorage.setItem('buttColor','#0054F8');
      sessionStorage.setItem('plane','white');
      sessionStorage.setItem('inpColor','#4da6ff'); 
    }

    const cobaltChange = () =>{
      sessionStorage.setItem('otherChat',"#F4B41A");
      sessionStorage.setItem('otherChatp',"black");
      sessionStorage.setItem('chatStud',"#143D59");
      sessionStorage.setItem('chatStudp',"white");
      /*Lower Part*/  
      sessionStorage.setItem('buttColor','#143d59');
      sessionStorage.setItem('plane','white');
      sessionStorage.setItem('inpColor','#f4b41a'); 
    }

    const royaltyChange = () =>{
      sessionStorage.setItem('otherChat',"#F19372");
      sessionStorage.setItem('otherChatp',"black");
      sessionStorage.setItem('chatStud',"#182F41");
      sessionStorage.setItem('chatStudp',"white");
      /*Lower Part*/  
      sessionStorage.setItem('buttColor','#182F41');
      sessionStorage.setItem('plane','white');
      sessionStorage.setItem('inpColor','#F19372'); 
    }

    const forestChange = () =>{
      sessionStorage.setItem('otherChat',"#97bc62");
      sessionStorage.setItem('otherChatp',"black");
      sessionStorage.setItem('chatStud',"#2c5f2d");
      sessionStorage.setItem('chatStudp',"white");
      /*Lower Part*/  
      sessionStorage.setItem('buttColor','#2c5f2d');
      sessionStorage.setItem('plane','white');
      sessionStorage.setItem('inpColor','#97bc62'); 
    }

    const soyChange = () =>{
      sessionStorage.setItem('otherChat',"#d7c49e");
      sessionStorage.setItem('otherChatp',"black");
      sessionStorage.setItem('chatStud',"#343148");
      sessionStorage.setItem('chatStudp',"white");
      /*Lower Part*/  
      sessionStorage.setItem('buttColor','#343148');
      sessionStorage.setItem('plane','white');
      sessionStorage.setItem('inpColor','#d7c49e'); 
    }

    const fiestaChange = () =>{
      sessionStorage.setItem('otherChat',"#9e1030");
      sessionStorage.setItem('otherChatp',"white");
      sessionStorage.setItem('chatStud',"#dd4132");
      sessionStorage.setItem('chatStudp',"white");
      /*Lower Part*/  
      sessionStorage.setItem('buttColor','#9e1030');
      sessionStorage.setItem('plane','white');
      sessionStorage.setItem('inpColor','#dd4132'); 
    }

    return (
      <div>
          <div className='modalContCust'>
              <div className='topTitle'>
                  <h1 className='sectionTitle'>Customize</h1>
                  <p onClick={onCloseC} className='closeBtn'>X</p>
              </div> 
              <div className='themeHeader'>
                <BsFillBrushFill className='palette'/>
                <p>Choose a color theme below!</p>
                <BsFillPaletteFill className='palette'/>
              </div> 
              <div className='parentSect'>
                <div className='leftHalf'>
                  <div className='themeRow'>
                    <div onClick={defaultChange} className='defaultTheme'>
                    </div>
                    <div className='themeDesc'>
                    <h1>Default Theme</h1>
                    <p>Other User (Chat Bubble): <span id="shadow" style={{color:"#9BDDFF"}}>Bluish Cyan</span></p>
                    <p>Your Chat Bubble: <span id="shadow" style={{color:"#082567"}}>Tealish Blue</span></p>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div onClick={cobaltChange} className='cobaltTheme'>
                    </div>
                    <div className='themeDesc'>
                    <h1 style={{color: "#F4B41A"}}>Cobalt Theme</h1>
                    <p>Other User (Chat Bubble): <span id="shadow" style={{color:"#F4B41A"}}>Orange-Yellow</span></p>
                    <p>Your Chat Bubble: <span id="shadow" style={{color:"#143D59"}}>Cyan-Blue</span></p>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div onClick={royaltyChange} className='royaltyTheme'>
                    </div>
                    <div className='themeDesc'>
                    <h1 style={{color: "#F19372"}}>Royalty Theme</h1>
                    <p>Other User (Chat Bubble): <span id="shadow" style={{color:"#F19372"}}>Red-Orange</span></p>
                    <p>Your Chat Bubble: <span id="shadow" style={{color:"#182F41"}}>Cyan-Blue (Medium)</span></p>
                    </div>
                  </div>
                </div>
                <div className='rightHalf'>
                  <div className='themeRow'>
                    <div onClick={forestChange} className='forestmossTheme'>
                    </div>
                    <div className='themeDesc'>
                    <h1 style={{color: "#2c5f2d"}}>ForestMoss Theme</h1>
                    <p>Other User (Chat Bubble): <span id="shadow" style={{color:"#97bc62"}}>Yellow-Green</span></p>
                    <p>Your Chat Bubble: <span id="shadow" style={{color:"#2c5f2d"}}>Green</span></p>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div onClick={soyChange} className='soyeclipseTheme'>
                    </div>
                    <div className='themeDesc'>
                    <h1 style={{color: "#343148"}}>SoyEclipse Theme</h1>
                    <p>Other User (Chat Bubble): <span id="shadow" style={{color:"#d7c49e"}}>Cashmere</span></p>
                    <p>Your Chat Bubble: <span id="shadow" style={{color:"#343148"}}>Dark Gray</span></p>
                    </div>
                  </div>
                  <div className='themeRow'>
                    <div onClick={fiestaChange} className='fiestaredTheme'>
                    </div>
                    <div className='themeDesc'>
                    <h1 style={{color: "#9e1030"}}>FiestaRed Theme</h1>
                    <p>Other User (Chat Bubble): <span id="shadow" style={{color:"#9e1030"}}>Pinkish Red</span></p>
                    <p>Your Chat Bubble: <span id="shadow" style={{color:"#dd4132"}}>Persian Red</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footerExit'>
              <p onClick={onCloseC} className='cancelBtn'>Cancel</p>
                <p onClick={()=>window.location.reload()} className='saveBtn'>Save</p>
              </div>
          </div>
      </div>
    )
}

export default Customize