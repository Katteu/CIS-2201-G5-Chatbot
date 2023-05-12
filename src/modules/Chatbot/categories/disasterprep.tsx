import React, { useState } from 'react'
import Chatbubble from '../component/chatbubble';
import clogo from "../../../assets/chatlogo.png";
import ChatStud from '../component/chatStud';
import Chatmenu from '../component/chatmenu'

const Disasterprep = ({disData}:{disData: DistPrep[]}) => {
  /*To check what is clicked*/
  const [selectedItem, setSelectedItem] = useState<DistPrep | null>(null);
  const [showQues, setShowQues] = useState<DistPrep | null>(null);
  const [end,setEnd] = useState(false);

  /*Determines what is clicked*/
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [buttonClicked2,setButtonClicked2] = useState<boolean>(false);
  const [contChat,setContChat] = useState(false);
  const [contChat2,setContChat2] = useState<string|null>(null);
  const [ask,setAsk] = useState(false);
  const [menuz,setMenuz] = useState(false);

  const handleButtonClick = (id: number) => {
    if(!buttonClicked){
      const item = disData.find((item) => item._DPID === id);
      setShowQues(item || null);
      setTimeout(() => setSelectedItem(item ||null), 1000);
      setTimeout(() => setContChat(true), 3000); 
      setButtonClicked(true);
    }
  };

  const stopChatting = () => {
    if(!buttonClicked2){
      setContChat2("Stop Chatting");
      setTimeout(() => setEnd(true), 900); 
      setButtonClicked2(true);
    }
  }

  const proceedMenu = () => {
    if(!buttonClicked2){
      setContChat2("Proceed to Menu");
      setTimeout(() => setMenuz(true), 900); 
      setButtonClicked2(true);
    }
  }

  const prevQues = () => {
    if(!buttonClicked2){
      setContChat2("Go back to Previous Questions");
      setTimeout(() => setAsk(true), 500); 
      setButtonClicked(false);
      setButtonClicked2(true);
    }
  }

  const choices = [
    { label: "Proceed to Menu", onClick: proceedMenu },
    { label: "Go back to Previous Questions", onClick: prevQues },
    { label: "Stop Chatting", onClick: stopChatting },
  ];

  return (
    <div>
      <Chatbubble message="You may click or type your desired question:"
                  chatImage={clogo}
                  buttonz={
                    disData.map((item, i) => ({
                      label: item._Question,
                      onClick: () => handleButtonClick(item._DPID),
                      "data-id": item._DPID,
                      key: i
                    }))
                  }
      />

      {showQues && (
         <ChatStud message={showQues?._Question}/>
      )}

      {selectedItem && (
         <Chatbubble chatImage={clogo} message={selectedItem._Response} imageUrl={selectedItem?._imageURL}/>
      )}

      {contChat && (
          <Chatbubble message="Do you want to continue chatting?"
          chatImage={clogo}
          buttonz={choices}  /> 
      )}
       
        {contChat2 && (
          <ChatStud message={contChat2}/>
        )}

      {menuz && (<Chatmenu/>)}
      {ask && (
        <Disasterprep disData={disData}/>
      )}

      {end && (
        <Chatbubble chatImage={clogo} message="Thank you for choosing our services. Let us know if you need any further assistance." />
      )}
    </div>
  )
}

export default Disasterprep;