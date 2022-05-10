import React from "react";

const Error = () => {
  return (
    <div className="login-body">
      <div className="error-box">
        <h1> 404 </h1>
        <h3 className="h2 mb-3">
          <i className="fas fa-exclamation-triangle"> </i> Oops! Page not found!
        </h3>
        <p className="h4 font-weight-normal">
          The page you requested was not found.
        </p>
        <a href="/profile" className="btn btn-info">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
