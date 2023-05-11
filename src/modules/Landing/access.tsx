import React from 'react'
import { useNavigate } from 'react-router-dom';
import usinglaptop from '../../assets/laptophuman.png'

const Access = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.cont}>
      <h1>Login first to access and experience!</h1>
    </div>
  )
}

const styles: any = {
  cont: {
    position: "absolute",
    top: '40%',
    left: '30%',
  },
};

export default Access