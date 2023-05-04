import React, { useState, useEffect } from "react";

interface ChatStudBubbleProps {
  message: string;
  subtext?: string;
}

const ChatStud: React.FC<ChatStudBubbleProps> = ({ message, subtext}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 1000);
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
    return () => clearTimeout(timeoutId);
  }, []);



  return isVisible ? (
    <div className="chatstud-bubble-container">
      <div className="chatstud-content">
          <div className="chatstud-bubble">
            <p>{message}</p>
            <p>{subtext}</p>
          </div>
          {firstName && <p className="chatstud-image">{firstName.charAt(0)}</p>}
      </div>
    </div>
  ) :
  <div className="chatstud-bubble-container">
  <div className="chatstud-content">
      <div className="chatstud-bubble-bef">
      <div className="snippet" data-title="dot-typing">
          <div className="stage">
            <div className="dot-typing"></div>
          </div>
        </div>
      </div>
      {firstName && <p className="chatstud-image">{firstName.charAt(0)}</p>}
  </div>
  </div>;
};

export default ChatStud;
