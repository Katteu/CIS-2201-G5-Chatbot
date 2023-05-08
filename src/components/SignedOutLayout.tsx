import React, { useEffect, useLayoutEffect,  useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import { FiBell, FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import logo from "../assets/DCISM_LOGO.png";
import { useOutlet } from "react-router-dom";
import { colors } from "../constants/colors";
import Preloader from "../modules/Chatbot/component/preloader";

function SignedOutLayout() {
  const outlet = useOutlet();
  const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName") || "");
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fNameStore = sessionStorage.getItem('firstName') || '';
    setFirstName(fNameStore);
    if (location.pathname === '/login') {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [location]);

  const logout = () => {
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userType");
    if (location.pathname === "/") {
      window.location.reload();
    }
    setIsLoading(true);
  }

  return (
    <>
    {isLoading ?
      <Preloader />
      :
    <div>
        <div style={styles.topNav}>
          <img src={logo} style={styles.logo} />
          <div style={{ marginLeft: "auto" }}>
            <FiBell style={styles.icon} />
            <FiUser style={styles.icon} />
            {firstName!=='' ?
            <FiLogOut onClick={logout} style={styles.icon} />
            :
            <FiLogIn onClick={()=>navigate('/login')} style={styles.icon}/>
          }
          </div>
        </div>
        <div style={styles.secondTopNav}>
          {firstName &&
              <p onClick={()=>navigate('/chatbot')}style={styles.link} className="link">
                Modules
              </p> 
          }
        </div>
        <div style={{ marginTop: "10vh", width: "100%", height: "96.1vh" }}>
          {outlet}
        </div>
    </div>
    }
    </>
  )
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
    cursor: "pointer",
  },
  link: {
    color: "white",
    marginRight: 70,
  },
};

