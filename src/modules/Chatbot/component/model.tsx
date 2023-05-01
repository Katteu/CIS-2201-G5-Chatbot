interface StudCon{
    _SCID: number;
    _Question:string;
    _Response:string;
    _faqID:number;
  }
  
  interface Buttonz {
    label: string;
    onClick: (id: number) => void;
    "data-id": number;
  }
  