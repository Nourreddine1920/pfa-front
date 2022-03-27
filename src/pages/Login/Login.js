import React, { useState } from "react";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
let initialValues = {};
const Login = () => {
  const [emailError, setemailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [Loading, setLoading] = useState(false);
  initialValues = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      console.log("form data", form);
      setLoading(false);
    }, 1200);
  }
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
                <h1> Login </h1>
                <p className="account-subtitle"> Remote access to HW testing Boards</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email Address"
                      onChange={(e) => {
                        setForm((form) => ({ ...form, email: e.target.value }));
                        let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                        if (!reg.test(e.target.value)) {
                          setemailError("Enter a valid email address");
                        } else {
                          setemailError("");
                        }
                      }}
                      onBlur={(e) => {
                        let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                        if (e.target.value === "") {
                          setemailError("Email address required");
                        } else if (!reg.test(e.target.value)) {
                          setemailError("Enter a valid email address");
                        } else {
                          setemailError("");
                        }
                      }}
                      required={true}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {emailError != "" ? (
                      <small
                        style={{
                          color: "red",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        {emailError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => {
                        setForm((form) => ({
                          ...form,
                          password: e.target.value,
                        }));

                        if (e.target.value === "") {
                          setPasswordError("Password required");
                        } else {
                          setPasswordError("");
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          setPasswordError("Password required");
                        } else {
                          setPasswordError("");
                        }
                      }}
                      required={true}
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {PasswordError != "" ? (
                      <small
                        style={{
                          color: "red",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        {PasswordError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <button
                      disabled={
                        form.email === "" ||
                        form.password === "" ||
                        emailError !== "" ||
                        PasswordError !== ""
                      }
                      onClick={() => handleSubmit()}
                      type="button"
                      className="btn btn-primary btn-block"
                    >
                      {Loading && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      &nbsp; Login
                    </button>
                  </div>
                </form>
                <div className="text-center forgotpass">
                  <a href="forgot-password"> Forgot Password ? </a>
                </div>
                <div className="login-or">
                  <span className="or-line"> </span>
                  <span className="span-or"> or </span>
                </div>
                <div className="social-login">
                  <span> Login with </span>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                </div>
                <div className="text-center dont-have">
                  Don’ t have an account ?<a href="register"> Register </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
