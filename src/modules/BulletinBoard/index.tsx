import React from 'react'

function BulletinBoard() {
  return (
    <div style={styles.cont}>
      <h1>Bulletin Board Coming Soon!</h1> 
    </div>
  )
}

export default BulletinBoard 

const styles: any = {
  cont: {
    position: "absolute",
    top: '40%',
    left: '30%',
  },
};
