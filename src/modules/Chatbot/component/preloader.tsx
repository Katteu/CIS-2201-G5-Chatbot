function Preloader() {
   
  return (
    <div className='bodyLoader' style={{background: "transparent"}}>
      <h1 style={{margin:"1%",background: "transparent"}}>Loading...</h1>
      <div className="progress">
        <div className="color"></div>
      </div>
    </div>
  );
}

export default Preloader