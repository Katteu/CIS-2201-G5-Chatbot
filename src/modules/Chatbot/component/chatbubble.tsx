import React, { useState, useEffect } from "react";

interface ChatBubbleProps {
  message: string;
  buttons?: { label: string; onClick: () => void }[];
  buttonz?: { label: string; onClick: () => void }[];
  chatImage?: string;
  subtext?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, buttons, buttonz,subtext, chatImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleButtonClick = (onClick: () => void) => {
    onClick();
  };

  return isVisible ? (
    <div className="chat-bubble-container">
      <div className="chat-content">
        {chatImage && <img src={chatImage} alt="chat" className="chat-image" />}
          <div className="chat-bubble">
            <p>{message}</p>
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
            <p>{subtext}</p>
          </div>
      </div>
    </div>
  ) :
  <div className="chat-bubble-container">
  <div className="chat-content">
    {chatImage && <img src={chatImage} alt="chat" className="chat-image" />}
      <div className="chat-bubble-bef">
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
