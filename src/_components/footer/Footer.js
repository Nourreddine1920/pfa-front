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
  return (
    <footer>
      <p> Copyright© 2022 --- PFA </p>
    </footer>
  );
};

export default Footer;
