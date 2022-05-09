import React from "react";

const Footer = (props) => {
  const exclusionArray = [
    "/",
    "/register",
    "/forgot-password",
    "/error",
    "/blank-page",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  const mystyle = {
    fontFamily : "initial",
    textAlign : "center",
  };
  return (
    <div className="footer-copyright text-center py-3">
    <p style={mystyle}>
      &copy; {new Date().getFullYear()} Copyright: <a href="#"> eLAB.com </a>
    </p>
  </div>
  );
};

export default Footer;
