import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RegisterApi } from "../../_services/app-services";

let initialValues = {};

const Register = () => {
  const [emailError, setemailError] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [UserNameError, setUserNameError] = useState("");

  const [Password2Error, setPassword2Error] = useState("");

  const [PasswordError, setPasswordError] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const [Loading, setLoading] = useState(false);
  initialValues = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const handleSubmit = async () => {
    setRegisterError("");
    console.log("form", form);
    RegisterApi(form)
      .then((res) => {
        console.log("res", res);
        if (res.status === 201) {
          window.location.replace("/login");
        }
        
      })
      .catch((err) => {
        console.log("err", err);
        setRegisterError(err);
      });
  };
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
                <p className="account-subtitle">
                  {" "}
                  Remote access to HW testing Boards{" "}
                </p>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="user name"
                      onChange={(e) => {
                        setForm((form) => ({ ...form, name: e.target.value }));
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          setUserNameError("user name is required");
                        } else {
                          setUserNameError("");
                        }
                      }}
                      required={true}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {UserNameError !== "" ? (
                      <small
                        style={{
                          color: "red",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        {UserNameError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="email"
                      onChange={(e) => {
                        setForm((form) => ({ ...form, email: e.target.value }));
                        let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                        if (!reg.test(e.target.value)) {
                          setemailError("enter a valid email address");
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
                          password1: e.target.value,
                        }));
                        setconfirmPassword(e.target.value);
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
                  <div className="form-group">
                    <input
                      onChange={(e) => {
                        setForm((form) => ({
                          ...form,
                          password2: e.target.value,
                        }));

                        if (e.target.value === "") {
                          setPassword2Error(
                            "password confirmation is required"
                          );
                        } else if (e.target.value !== confirmPassword) {
                          setPassword2Error("password mismatch");
                        } else {
                          setPassword2Error("");
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          setPassword2Error(
                            "password confirmation is required"
                          );
                        } else {
                          setPassword2Error("");
                        }
                      }}
                      required={true}
                      className="form-control"
                      type="text"
                      placeholder="confirm password"
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {Password2Error !== "" ? (
                      <small
                        style={{
                          color: "red",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        {Password2Error}
                      </small>
                    ) : null}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {registerError !== "" ? (
                      <p
                        style={{
                          color: "red",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        {registerError}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group mb-0">
                    <button
                      disabled={
                        form.name === "" ||
                        form.email === "" ||
                        form.password1 === "" ||
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
                      &nbsp; Register
                    </button>
                  </div>
                </form>
                <div className="login-or">
                  <span className="or-line"> </span>
                  <span className="span-or"> or </span>
                </div>
                <div className="social-login">
                  <span> Register with </span>
                  <a href="/login" type="button" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="/login" type="button" className="google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                </div>
                <div className="text-center dont-have">
                  Already have an account ? <a href="/login"> Login </a>
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
