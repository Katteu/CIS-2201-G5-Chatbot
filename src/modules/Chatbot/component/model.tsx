export interface StudCon{
    _SCID: number;
    _Question:string;
    _Response:string;
    _faqID:number;
    _imageURL?: string;
  }

export interface RoomLoc{
  _RLID: number;
  _Question:string;
  _Response:string;
  _imageURL: string;
  _faqID:number;
}
  
export interface DistPrep{
  _DPID: number;
  _Question:string;
  _Response:string;
  _faqID:number;
  _imageURL?: string;
}

export interface AlumniAff{
  _AffID: number;
  _Question:string;
  _Response:string;
  _faqID:number;
  _imageURL?: string;
}

export interface Miscellaneous{
  _MisceID: number;
  _Question:string;
  _Response:string;
  _faqID:number;
  _imageURL?: string;
}

export interface Buttonz {
  label: string;
  onClick: (id: number) => void;
  "data-id": number;
}

export {};
