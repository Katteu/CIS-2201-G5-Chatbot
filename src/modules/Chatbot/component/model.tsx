interface StudCon{
    _SCID: number;
    _Question:string;
    _Response:string;
    _faqID:number;
    _imageURL?: string;
  }

interface RoomLoc{
  _RLID: number;
  _Question:string;
  _Response:string;
  _imageURL: string;
  _faqID:number;
}
  
interface DistPrep{
  _DPID: number;
  _Question:string;
  _Response:string;
  _faqID:number;
  _imageURL?: string;
}

interface AlumniAff{
  _AffID: number;
  _Question:string;
  _Response:string;
  _faqID:number;
  _imageURL?: string;
}

interface Miscellaneous{
  _MisceID: number;
  _Question:string;
  _Response:string;
  _faqID:number;
  _imageURL?: string;
}

interface Buttonz {
  label: string;
  onClick: (id: number) => void;
  "data-id": number;
}
  