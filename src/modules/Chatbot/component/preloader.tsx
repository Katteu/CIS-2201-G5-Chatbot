function Preloader() {
   
  return (
    <div className='bodyLoader'>
      <h1 style={{margin:"1%"}}>Loading...</h1>
      <div className="progress">
        <div className="color"></div>
      </div>
    </div>
  );
}

export default Preloader