import React from "react";
import { Dropdown } from "react-bootstrap";
import $ from "jquery";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faBell,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";

class Header extends React.Component {
  // handlesidebar = () => {
  //   document.body.classList.toggle("mini-sidebar");
  // };

  componentDidMount() {
    // Mobile menu sidebar overlay

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
  }

  render() {
    const exclusionArray = ["/", "/register", "/forgot-password", "/error"];
    if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
      return "";
    }
    return (
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="" to="index" className="logo">
            <img src="assets/img/logo.png" alt="Logo" />
          </a>
          <a href="" className="logo logo-small">
            <img src={"assets/img/logo-small.png"} alt="Logo" />
          </a>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" onClick={this.handlesidebar}>
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
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i className="far fa-bell"></i>
              <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  Clear All
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
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
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
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
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
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
                            <span className="noti-title">John Hendry</span> sent
                            a cancellation request
                            <span className="noti-title">Apple iPhone XR</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
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
                            <span className="noti-title">
                              Apple MacBook Pro
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="assets/img/profiles/avatar-01.jpg"
                  width="31"
                  alt="Ryan Taylor"
                ></img>
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="assets/img/profiles/avatar-01.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  ></img>
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="/profile">
                My Profile
              </a>
              <a className="dropdown-item" href="/inbox">
                Inbox
              </a>
              <a className="dropdown-item" href="/">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
