import React from "react";
import { FiBell, FiUser, FiLogOut } from "react-icons/fi";
import logo from "../assets/DCISM_LOGO.png";
import { useOutlet } from "react-router-dom";
import { colors } from "../constants/colors";

function SignedOutLayout() {
  const outlet = useOutlet();
  return (
    <div>
      <div style={styles.topNav}>
        <img src={logo} style={styles.logo} />
        <div style={{ marginLeft: "auto" }}>
          <FiBell style={styles.icon} />
          <FiUser style={styles.icon} />
          <FiLogOut style={styles.icon} />
        </div>
      </div>
      <div style={styles.secondTopNav}>
        <p style={styles.link} className="link">
          Link
        </p>
      </div>
      <div style={{ marginTop: "10vh", width: "100%", height: "100vh" }}>
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
  },
};
