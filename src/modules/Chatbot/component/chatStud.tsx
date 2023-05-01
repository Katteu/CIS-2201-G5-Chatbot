import React, { useState, useEffect } from "react";

interface ChatBubbleProps {
  message: string;
  chatImage?: string;
  subtext?: string;
}

const ChatStud: React.FC<ChatBubbleProps> = ({ message, subtext, chatImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timeoutId);
  }, []);


  return isVisible ? (
    <div className="chatstud-bubble-container">
      <div className="chatstud-content">
          <div className="chatstud-bubble">
            <p>{message}</p>
            <p>{subtext}</p>
          </div>
          {chatImage && <img src={chatImage} alt="S" className="chatstud-image" />}
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
      {chatImage && <img src={chatImage} alt="S" className="chatstud-image" />}
  </div>
  </div>;
};

export default ChatStud;
