import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import $ from "jquery";
import { history } from "../_helpers/history";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faUserGraduate,
  faChalkboardTeacher,
  faBuilding,
  faBook,
  faFile,
  faHockeyPuck,
  faDollarSign,
  faClipboard,
  faCalendar,
  faTable,
  faShieldAlt,
  faBaseballBall,
  faBus,
  faColumns,
  faCode,
} from "@fortawesome/fontawesome-free-solid";
import { faSquarespace } from "@fortawesome/free-brands-svg-icons";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: history.location.pathname.split("/")[1],
    };
  }
  componentDidMount() {
    var Sidemenu = function () {
      this.$menuItem = $("#sidebar-menu a");
    };

    function init() {
      console.log("iniiiitttt ....");
      var $this = Sidemenu;
      $("#sidebar-menu a").on("click", function (e) {
        if ($(this).parent().hasClass("submenu")) {
          e.preventDefault();
        }
        if (!$(this).hasClass("subdrop")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("subdrop");
          $(this).next("ul").slideDown(350);
          $(this).addClass("subdrop");
        } else if ($(this).hasClass("subdrop")) {
          $(this).removeClass("subdrop");
          $(this).next("ul").slideUp(350);
        }
      });
      $("#sidebar-menu ul li.submenu a.active")
        .parents("li:last")
        .children("a:first")
        .addClass("active")
        .trigger("click");
    }

    $(document).on("mouseover", function (e) {
      e.stopPropagation();
      if (
        $("body").hasClass("mini-sidebar") &&
        $("#toggle_btn").is(":visible")
      ) {
        var targ = $(e.target).closest(".sidebar").length;
        if (targ) {
          $("body").addClass("expand-menu");
          $(".subdrop + ul").slideDown();
        } else {
          $("body").removeClass("expand-menu");
          $(".subdrop + ul").slideUp();
        }
        return false;
      }
    });
    // Sidebar Initiate
    init();
  }

  render() {
    const { pathname } = this.state;
    let pathnames = window.location.pathname;
    const exclusionArray = ["/", "/register", "/forgot-password", "/error"];
    if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
      return "";
    }

    return (
      <div className="sidebar" id="sidebar">
        <Scrollbars
          style={{
            height: "100vh",
          }}
        >
          <div className="sidebar-inner">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span> Main Menu </span>
                </li>
                <li
                  className={
                    pathnames.includes("dashboard") ||
                    pathnames.includes("teacher-dashboard") ||
                    pathnames.includes("student-dashboard")
                      ? "active"
                      : ""
                  }
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faThLarge} /> <span>Dashboard</span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={
                        pathnames.includes("dashboard") ? "active" : ""
                      }
                    >
                      <Link to="/dashboard"> Admin Dashboard </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("teacher-dashboard") ? "active" : ""
                      }
                    >
                      <Link to="/teacher-dashboard"> Teacher Dashboard </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("student-dashboard") ? "active" : ""
                      }
                    >
                      <Link to="/student-dashboard"> Student Dashboard </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`submenu ${
                    pathnames.includes("students")
                      ? "active"
                      : pathnames.includes("student-details")
                      ? "active"
                      : pathnames.includes("add-student")
                      ? "active"
                      : pathnames.includes("edit-student")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <span> Students</span> <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={pathnames.includes("students") ? "active" : ""}
                    >
                      <Link to="/students"> Student List </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("student-details") ? "active" : ""
                      }
                    >
                      <Link to="/student-details"> Student View </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-student") ? "active" : ""
                      }
                    >
                      <Link to="/add-student"> Student Add </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("edit-student") ? "active" : ""
                      }
                    >
                      <Link to="/edit-student"> Student Edit </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`submenu ${
                    pathnames.includes("teachers")
                      ? "active"
                      : pathnames.includes("teacher-details")
                      ? "active"
                      : pathnames.includes("add-teacher")
                      ? "active"
                      : pathnames.includes("edit-teacher")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                    <span> Teachers</span> <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={pathnames.includes("teachers") ? "active" : ""}
                    >
                      <Link to="/teachers"> Teacher List </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("teacher-details") ? "active" : ""
                      }
                    >
                      <Link to="/teacher-details"> Teacher View </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-teacher") ? "active" : ""
                      }
                    >
                      <Link to="/add-teacher"> Teacher Add </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("edit-teacher") ? "active" : ""
                      }
                    >
                      <Link to="/edit-teacher"> Teacher Edit </Link>
                    </li>
                  </ul>
                </li>

                {/* <li
                  className={`submenu ${
                    pathnames.includes("subjects")
                      ? "active"
                      : pathnames.includes("add-subject")
                      ? "active"
                      : pathnames.includes("edit-subject")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faBook} /> <span> Subjects</span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={pathnames.includes("subjects") ? "active" : ""}
                    >
                      <Link to="/subjects"> Subject List </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-subject") ? "active" : ""
                      }
                    >
                      <Link to="/add-subject"> Subject Add </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("edit-subject") ? "active" : ""
                      }
                    >
                      <Link to="/edit-subject"> Subject Edit </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="menu-title">
                  <span> Management </span>
                </li>
                {/* <li
                  className={`submenu ${
                    pathnames.includes("fees-collections")
                      ? "active"
                      : pathnames.includes("expenses")
                      ? "active"
                      : pathnames.includes("salary")
                      ? "active"
                      : pathnames.includes("add-fees-collections")
                      ? "active"
                      : pathnames.includes("add-expenses")
                      ? "active"
                      : pathnames.includes("add-salary")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faFile} /> <span> Accounts</span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={
                        pathnames.includes("fees-collections") ? "active" : ""
                      }
                    >
                      <Link to="/fees-collections"> Fees Collection </Link>
                    </li>
                    <li
                      className={pathnames.includes("expenses") ? "active" : ""}
                    >
                      <Link to="/expenses"> Expenses </Link>
                    </li>
                    <li
                      className={pathnames.includes("salary") ? "active" : ""}
                    >
                      <Link to="/salary"> Salary </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-fees-collections")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/add-fees-collections"> Add Fees </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-expenses") ? "active" : ""
                      }
                    >
                      <Link to="/add-expenses"> Add Expenses </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-salary") ? "active" : ""
                      }
                    >
                      <Link to="/add-salary"> Add Salary </Link>
                    </li>
                  </ul>
                </li> */}
                <li className={pathnames.includes("activity") ? "active" : ""}>
                  <Link to="/activity">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Activity list</span>
                  </Link>
                </li>
                <li className={pathnames.includes("boardslist") ? "active" : ""}>
                  <Link to="/boardslist">
                    <FontAwesomeIcon icon={faHockeyPuck} />
                    <span>Board list</span>
                  </Link>
                </li>
                <li className={pathnames.includes("exam") ? "active" : ""}>
                  <Link to="/exam">
                    <FontAwesomeIcon icon={faClipboard} />
                    <span>Exam list</span>
                  </Link>
                </li>

                <li
                  className={pathnames.includes("time-table") ? "active" : ""}
                >
                  <Link to="/time-table">
                    <FontAwesomeIcon icon={faTable} /> <span>Time Table</span>
                  </Link>
                </li>

                {/* <li className="menu-title">
                  <span> Pages </span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span> Authentication </span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/"> Login </Link>
                    </li>
                    <li>
                      <Link to="/register"> Register </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password"> Forgot Password </Link>
                    </li>
                    <li>
                      <Link to="/error"> Error Page </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={pathnames.includes("blank-page") ? "active" : ""}
                >
                  <Link to="/blank-page">
                    <FontAwesomeIcon icon={faFile} /> <span>Blank Page</span>
                  </Link>
                </li> */}
                <li className="menu-title">
                  <span> Others </span>
                </li>
                <li
                  className={pathnames.includes("blank-page") ? "active" : ""}
                >
                  <Link to="/blank-page">
                    <FontAwesomeIcon icon={faFile} /> <span>Blank Page</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default Sidebar;
