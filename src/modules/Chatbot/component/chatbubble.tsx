import React, { useState, useEffect, useContext } from "react";

interface ChatBubbleProps {
  message: string;
  buttons?: { label: string; onClick: () => void }[];
  buttonz?: { label: string; onClick: () => void }[];
  chatImage?: string;
  imageUrl?: string;
  subtext?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, buttons, buttonz,subtext, chatImage,imageUrl}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setColor] = useState<string>('#8dd8ff');
  const [colorP, setColorP] = useState<string>('#002366');

  useEffect(() => {
    const otherChat = sessionStorage.getItem('otherChat');
    const otherChatp = sessionStorage.getItem('otherChatp'); 
  
    if (otherChat !== null && otherChatp!== null) {
      setColor(otherChat);
      setColorP(otherChatp);
    }

    const timeoutId = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timeoutId);
  }, []);

    useEffect(() => {
      sessionStorage.setItem('otherChat', color);
      sessionStorage.setItem('otherChatp', colorP);
    }, [color, colorP]);

  const handleButtonClick = (onClick: () => void) => {
    onClick();
  };

  return isVisible ? (
    <div className="chat-bubble-container">
      <div className="chat-content">
        {chatImage && <img src={chatImage} alt="chat" className="chat-image" style={{backgroundColor:color}}/>}
          <div className="chat-bubble" style={{backgroundColor:color}}>
            <p style={{color:colorP}}>{message}</p>
            {imageUrl && <img src={imageUrl} alt="roomLoc" className="roomImg" />}
            {buttons && (
              <div className="buttons-container">
                {buttons.map((button) => (
                  <button key={button.label} onClick={() => handleButtonClick(button.onClick)}>
                    {button.label}
                  </button>
                ))}
              </div>
            )}

            {buttonz && (
              <div className="buttonz-container">
                {buttonz.map((button) => (
                  <button key={button.label} onClick={() => handleButtonClick(button.onClick)}>
                    {button.label}
                  </button>
                ))}
              </div>
            )}
            {subtext && <p style={{color:colorP}}>{subtext}</p>}
          </div>
      </div>
    </div>
  ) :
  <div className="chat-bubble-container">
  <div className="chat-content">
    {chatImage && <img src={chatImage} alt="chat" className="chat-image" style={{backgroundColor:color}} />}
      <div className="chat-bubble-bef"  style={{backgroundColor:color}}>
      <div className="snippet" data-title="dot-typing">
          <div className="stage">
            <div className="dot-typing"></div>
          </div>
        </div>
      </div>
  </div>
  </div>;
};

export default ChatBubble;

