import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { FiBell, FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import logo from "../assets/DCISM_LOGO.png";
import { useOutlet } from "react-router-dom";
import { colors } from "../constants/colors";

function SignedOutLayout() {
  const outlet = useOutlet();
  const [firstName, setFirstName] = useState('');
  const history = useNavigate();
  
  useEffect(() => {
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
  }, []);

  return (
    <div>
      <div style={styles.topNav}>
        <img src={logo} style={styles.logo} />
        <div style={{ marginLeft: "auto" }}>
          <FiBell style={styles.icon} />
          <FiUser style={styles.icon} />
          {firstName!='' ?
          <FiLogOut style={styles.icon} />
          :
          <FiLogIn onClick={()=>history('/login')} style={styles.icon}/>
         }
        </div>
      </div>
      <div style={styles.secondTopNav}>
        {firstName &&
            <p onClick={()=>history('/chatbot')}style={styles.link} className="link">
              Modules
            </p>  
        }
      </div>
      <div style={{ marginTop: "10vh", width: "100%", height: "96.1vh" }}>
        {outlet}
      </div>
    </div>
  );
}

export default SignedOutLayout;

const styles: any = {
  logo: {
    width: "10%",
    height: "80%",
    marginLeft: "10px",
  },
  secondTopNav: {
    position: "absolute",
    top: "6vh",
    width: "100%",
    backgroundColor: colors.brand,
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topNav: {
    position: "absolute",
    background: colors.secondary,
    top: 0,
    width: "100%",
    height: "6vh",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
    color: colors.brand,
    fontSize: 15,
  },
  link: {
    color: "white",
    marginRight: 70,
    cursor: "pointer",
  },
};
