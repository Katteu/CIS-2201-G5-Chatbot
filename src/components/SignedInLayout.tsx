import React from "react";
import { useOutlet } from "react-router-dom";
import logo from "../assets/DCISM_LOGO.png";
import { FiUser, FiLogOut, FiBell } from "react-icons/fi";
import { colors } from "../constants/colors";

function SignedInLayout() {
  const outlet = useOutlet();
  return (
    <div>
      <div style={styles.topNav}>
        <img src={logo} style={styles.logo} />
        <div style={{ marginLeft: "auto" }}>
          <FiBell style={styles.navIcon} />
          <FiUser style={styles.navIcon} />
          <FiLogOut style={styles.navIcon} />
        </div>
      </div>
      <div style={styles.sideNav}>
        <p className="link" onClick={() => console.log('asd')} style={styles.link}>Link</p>
        <p className="link" onClick={() => console.log('asd')} style={styles.link}>Link</p>
      </div>
      <div style={styles.contentContainer}>{outlet}</div>
    </div>
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
    width: "9%",
    height: "100vh",
    backgroundColor: colors.brand,
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
  },
  navIcon: {
    marginRight: 20,
    color: colors.brand,
    fontSize: 15,
  },
  contentContainer: {
    width: "98vh",
    height: "100vh",
    marginLeft: "9vw",
    marginTop: "6vh",
  },
  link: {
    marginTop: 20,
    color: "white",
    height: 10,
  },
};
