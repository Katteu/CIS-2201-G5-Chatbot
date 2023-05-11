import React, { useState, useEffect } from "react";

interface ChatStudBubbleProps {
  message: string;
  subtext?: string;
}

const ChatStud: React.FC<ChatStudBubbleProps> = ({ message, subtext}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [color, setColor] = useState<string>('#013fa6');
  const [colorP, setColorP] = useState<string>('white');

  useEffect(() => {
    const otherChat = sessionStorage.getItem('chatStud');
    const otherChatp = sessionStorage.getItem('chatStudp'); 
  
    if (otherChat !== null && otherChatp!== null) {
      setColor(otherChat);
      setColorP(otherChatp);
    }
    const timeoutId = setTimeout(() => setIsVisible(true), 1000);
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
    return () => clearTimeout(timeoutId);
  }, []);

    useEffect(() => {
      sessionStorage.setItem('chatStud', color);
      sessionStorage.setItem('chatStudp', colorP);
    }, [color, colorP]);


  return isVisible ? (
    <div className="chatstud-bubble-container">
      <div className="chatstud-content">
          <div className="chatstud-bubble" style={{backgroundColor:color}}>
            <p style={{color:colorP}}>{message}</p>
            {subtext && <p style={{color:colorP}}>{subtext}</p>}
          </div>
          {firstName && <p className="chatstud-image"  style={{backgroundColor:color}}>{firstName.charAt(0)}</p>}
      </div>
    </div>
  ) :
  <div className="chatstud-bubble-container">
  <div className="chatstud-content">
      <div className="chatstud-bubble-bef" style={{backgroundColor:color}}>
      <div className="snippet" data-title="dot-typing">
          <div className="stage">
            <div className="dot-typing"></div>
          </div>
        </div>
      </div>
      {firstName && <p className="chatstud-image" style={{backgroundColor:color}}>{firstName.charAt(0)}</p>}
  </div>
  </div>;
};

export default ChatStud;
