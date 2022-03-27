import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Register = () => {
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img
                className="img-fluid"
                src="/assets/img/logo-white.png"
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1> Register </h1>
                <p className="account-subtitle"> Remote access to HW testing Boards </p>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <a href="/dashboard" className="btn btn-primary btn-block">
                      Register
                    </a>
                  </div>
                </form>
                <div className="login-or">
                  <span className="or-line"> </span>
                  <span className="span-or"> or </span>
                </div>
                <div className="social-login">
                  <span> Register with </span>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                </div>
                <div className="text-center dont-have">
                  Already have an account ? <a href="/"> Login </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
