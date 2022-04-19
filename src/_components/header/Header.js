import { faAlignLeft, faSearch } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../../_context/authContext.tsx";
import $ from "jquery";
import React, { useEffect } from "react";

const Header = (props) => {
  const { login, logout } = React.useContext(AuthContext);
  useEffect(() => {
    var $wrapper = $(".main-wrapper");

    $("body").append('<div className="sidebar-overlay"></div>');
    $(document).on("click", "#mobile_btn", function () {
      $wrapper.toggleClass("slide-nav");
      $(".sidebar-overlay").toggleClass("opened");
      $("html").addClass("menu-opened");
      return false;
    });

    // Sidebar overlay

    $(".sidebar-overlay").on("click", function () {
      $wrapper.removeClass("slide-nav");
      $(".sidebar-overlay").removeClass("opened");
      $("html").removeClass("menu-opened");
    });
  }, []);
  const exclusionArray = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/error",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  const LogOUt = async () => {
    await logout()
      .then((res) => {
        window.location.replace("/login");
      })
      .catch((err) => {
        if (err === "Network Error") {
        } else {
          console.log("error", err);
        }
      });
  };
  return (
    <div className="header">
      {/* Logo */}
      <div className="header-left">
        <a href="" to="index" className="logo">
          <img src="assets/img/elab.png" alt="Logo" />
        </a>
        <a href="" className="logo logo-small">
          <img src={"assets/img/elab.png"} alt="Logo" />
        </a>
      </div>
      {/* /Logo */}
      <a id="toggle_btn">
        <FontAwesomeIcon icon={faAlignLeft} />
      </a>
      {/* Search Bar */}
      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      {/* /Search Bar */}
      <a className="mobile_btn" id="mobile_btn">
        <i className="fas fa-bars"> </i>
      </a>

      <ul className="nav user-menu">
        <li className="nav-item dropdown noti-dropdown">
          <a
            type="button"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="" className="clear-noti">
                Clear All
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a type="button">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-02.jpg"
                        />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Carlson Tech</span> has
                          approved
                          <span className="noti-title">your estimate</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a type="button">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-11.jpg"
                        ></img>
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">
                            International Software Inc
                          </span>
                          has sent you a invoice in the amount of
                          <span className="noti-title">$218</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a type="button">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-17.jpg"
                        ></img>
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">John Hendry</span> sent a
                          cancellation request
                          <span className="noti-title">Apple iPhone XR</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a type="button">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-13.jpg"
                        ></img>
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">
                            Mercury Software Inc
                          </span>
                          added a new product
                          <span className="noti-title">Apple MacBook Pro</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="/notifications">View all Notifications</a>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown has-arrow">
          <a
            type="button"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img
                className="rounded-circle"
                src="assets/img/profiles/avatar-13.jpg"
                width="31"
                alt="Ryan Taylor"
              ></img>
            </span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img
                  src="assets/img/profiles/avatar-13.jpg"
                  alt="User Image"
                  className="avatar-img rounded-circle"
                ></img>
              </div>
              <div className="user-text">
                <h6>Ryan Taylor</h6>
                <p className="text-muted mb-0">👨‍🏫 Teacher</p>
              </div>
            </div>
            <a className="dropdown-item" href="/profile">
              My Profile
            </a>
            <a className="dropdown-item" href="/inbox">
              Inbox
            </a>
            <a
              className="dropdown-item"
              type="button"
              onClick={() => {
                LogOUt();
              }}
            >
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
