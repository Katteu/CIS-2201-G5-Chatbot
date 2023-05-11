import { useOutlet, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/DCISM_LOGO.png";
import { FiUser, FiLogOut, FiBell, FiLogIn } from "react-icons/fi";
import { colors } from "../constants/colors";
import { SignedInLinks } from "../constants/links";
import { getLinkClass } from "../helpers/functions";
import { useEffect, useState } from "react";
import Preloader from "../modules/Chatbot/component/preloader";

function SignedInLayout() {
  const outlet = useOutlet();
  const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName") || "");
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  

  const logout = () => {
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userType");
    if (location.pathname === "/") {  
      window.location.reload();
    }else{
      navigate('/');
    }
    setIsLoading(true);
  }

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

  return (
    <>
    {isLoading ?
      <Preloader />
      :
    <div>
      <div style={styles.topNav}>
        <img src={logo} style={styles.logo} />
        <div style={{ marginLeft: "auto" }}>
         {firstName!=='' ?
          <>
          <FiBell onClick={()=> alert('No updates!')} style={styles.navIcon} />
          <FiUser onClick={()=> navigate('/profile')} style={styles.navIcon} />
          <FiLogOut onClick={logout} style={styles.navIcon} />
          </>
          :
          <FiLogIn onClick={()=>navigate('/login')} style={styles.icon}/>
        }
        </div>
      </div>
      <div style={styles.sideNav}>
        {SignedInLinks.map((link) => (
          <p
            key={link.name}
            className={getLinkClass(link.link, location.pathname)}
            onClick={() => navigate(link.link)}
            style={styles.link}
          >
            {link.name}
          </p>
        ))}
      </div>
      <div style={styles.contentContainer}>{outlet}</div>
    </div>
    }
    </>
  );
}

export default SignedInLayout;

const styles: any = {
  topNav: {
    position: "absolute",
    background: colors.secondary,
    top: 0,
    width: "100%",
    height: "6vh",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "10%",
    height: "80%",
    marginLeft: "10px",
  },
  sideNav: {
    position: "absolute",
    top: "6vh",
    width: "12%",
    height: "94vh",
    backgroundColor: colors.brand,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navIcon: {
    marginRight: 20,
    color: colors.brand,
    fontSize: 15,
    cursor: "pointer",
  },
  contentContainer: {
    // width: "98vh",
    height: "100vh",
    marginLeft: "12vw",
    marginTop: "6vh",
  },
  link: {
    marginTop: 30,
    color: "white",
    height: 10,
    textAlign: "right",
    cursor: "pointer",
  },
  icon: {
    marginRight: 20,
    color: colors.brand,
    fontSize: 15,
    cursor: "pointer",
  },
};
