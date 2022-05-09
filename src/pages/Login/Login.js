import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import AuthContext from "../../_context/authContext.tsx";
const Login = () => {
  const { login } = React.useContext(AuthContext);
  const [emailError, setemailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    setLoading(true);
    setLoginError('')
    console.log("form", form);
    await login(form)
      .then((res) => {
        setLoading(false);
        window.location.replace("/profile");
      })
      .catch((err) => {
        if (err === "Network Error") {
          setLoading(false);
        } else {
          console.log("error", err);
          setLoginError(err);
          setLoading(false);
        }
      });
    setLoading(false);
  };
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img
                className="img-fluid"
                src="/assets/img/elab.png"
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1> Login </h1>
                <p className="account-subtitle">
                  {" "}
                  Remote access to HW testing Boards
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="email address"
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
                    {emailError !== "" ? (
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
                      placeholder="password"
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {PasswordError !== "" ? (
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
                  <div style={{ textAlign: "center" }}>
                    {loginError !== "" ? (
                      <p
                        style={{
                          color: "red",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        {loginError}
                      </p>
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
                      className="btn btn-info btn-block"
                    >
                      {Loading && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      &nbsp; Login
                    </button>
                  </div>
                </form>
                <div className="text-center forgotpass">
                  <a href="/reset_password"> Forgot Password ? </a>
                </div>
                <div className="login-or">
                  <span className="or-line"> </span>
                  <span className="span-or"> or </span>
                </div>
                <div className="social-login">
                  <span> Login with </span>
                  <a type="button" href="/login" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a type="button" href="/login" className="google">
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
