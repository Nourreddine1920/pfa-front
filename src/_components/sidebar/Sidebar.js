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
      console.log('iniiiitttt ....')
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
                        pathnames.includes("teacher-dashboard")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/teacher-dashboard"> Teacher Dashboard </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("student-dashboard")
                          ? "active"
                          : ""
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
                      className={
                        pathnames.includes("students") ? "active" : ""
                      }
                    >
                      <Link to="/students"> Student List </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("student-details")
                          ? "active"
                          : ""
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
                        pathnames.includes("edit-student")
                          ? "active"
                          : ""
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
                      className={
                        pathnames.includes("teachers") ? "active" : ""
                      }
                    >
                      <Link to="/teachers"> Teacher List </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("teacher-details")
                          ? "active"
                          : ""
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
                        pathnames.includes("edit-teacher")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/edit-teacher"> Teacher Edit </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`submenu ${
                    pathnames.includes("departments")
                      ? "active"
                      : pathnames.includes("add-department")
                      ? "active"
                      : pathnames.includes("edit-department")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faBuilding} />
                    <span> Departments</span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={
                        pathnames.includes("departments") ? "active" : ""
                      }
                    >
                      <Link to="/departments"> Department List </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("add-department")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/add-department"> Department Add </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("edit-department")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/edit-department"> Department Edit </Link>
                    </li>
                  </ul>
                </li>
                <li
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
                      className={
                        pathnames.includes("subjects") ? "active" : ""
                      }
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
                        pathnames.includes("edit-subject")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/edit-subject"> Subject Edit </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span> Management </span>
                </li>
                <li
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
                        pathnames.includes("fees-collections")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/fees-collections"> Fees Collection </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("expenses") ? "active" : ""
                      }
                    >
                      <Link to="/expenses"> Expenses </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("salary") ? "active" : ""
                      }
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
                        pathnames.includes("add-expenses")
                          ? "active"
                          : ""
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
                </li>
                <li
                  className={
                    pathnames.includes("holiday") ? "active" : ""
                  }
                >
                  <Link to="/holiday">
                    <FontAwesomeIcon icon={faHockeyPuck} /> <span>Holiday</span>
                  </Link>
                </li>
                <li
                  className={pathnames.includes("fees") ? "active" : ""}
                >
                  <Link to="/fees">
                    <FontAwesomeIcon icon={faDollarSign} /> <span>Fees</span>
                  </Link>
                </li>
                <li
                  className={pathnames.includes("exam") ? "active" : ""}
                >
                  <Link to="/exam">
                    <FontAwesomeIcon icon={faClipboard} />
                    <span>Exam list</span>
                  </Link>
                </li>
                <li
                  className={pathnames.includes("event") ? "active" : ""}
                >
                  <Link to="/event">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Events</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("time-table") ? "active" : ""
                  }
                >
                  <Link to="/time-table">
                    <FontAwesomeIcon icon={faTable} /> <span>Time Table</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("library") ? "active" : ""
                  }
                >
                  <Link to="/library">
                    <FontAwesomeIcon icon={faBook} /> <span>Library</span>
                  </Link>
                </li>
                <li className="menu-title">
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
                  className={
                    pathnames.includes("blank-page") ? "active" : ""
                  }
                >
                  <Link to="/blank-page">
                    <FontAwesomeIcon icon={faFile} /> <span>Blank Page</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span> Others </span>
                </li>
                <li
                  className={
                    pathnames.includes("sports") ? "active" : ""
                  }
                >
                  <Link to="/sports">
                    <FontAwesomeIcon icon={faBaseballBall} />
                    <span>Sports</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("hostel") ? "active" : ""
                  }
                >
                  <Link to="/hostel">
                    <FontAwesomeIcon icon={faBuilding} /> <span>Hostel</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("transport") ? "active" : ""
                  }
                >
                  <Link to="/transport">
                    <FontAwesomeIcon icon={faBus} /> <span>Transport</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span> UI Interface </span>
                </li>
                <li
                  className={
                    pathnames.includes("components") ? "active" : ""
                  }
                >
                  <Link to="/components">
                    <FontAwesomeIcon icon={faSquarespace} />
                    <span>Components</span>
                  </Link>
                </li>
                <li
                  className={`submenu ${
                    pathnames.includes("form-basic-inputs")
                      ? "active"
                      : pathnames.includes("form-input-groups")
                      ? "active"
                      : pathnames.includes("form-horizontal")
                      ? "active"
                      : pathnames.includes("form-vertical")
                      ? "active"
                      : pathnames.includes("form-mask")
                      ? "active"
                      : pathnames.includes("form-validation")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faColumns} /> <span> Forms </span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={
                        pathnames.includes("form-basic-inputs")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/form-basic-inputs"> Basic Inputs </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("form-input-groups")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/form-input-groups"> Input Groups </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("form-horizontal")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/form-horizontal"> Horizontal Form </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("form-vertical")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/form-vertical"> Vertical Form </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("form-mask") ? "active" : ""
                      }
                    >
                      <Link to="/form-mask"> Form Mask </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("form-validation")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/form-validation"> Form Validation </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`submenu ${
                    pathnames.includes("tables-basic")
                      ? "active"
                      : pathnames.includes("data-tables")
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faTable} /> <span> Tables </span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li
                      className={
                        pathnames.includes("tables-basic")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/tables-basic"> Basic Tables </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("data-tables") ? "active" : ""
                      }
                    >
                      <Link to="/data-tables"> Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <FontAwesomeIcon icon={faCode} /> <span>Multi Level</span>
                    <span className="menu-arrow"> </span>
                  </a>
                  <ul>
                    <li className="submenu">
                      <a href="#">
                        <span> Level 1 </span>
                        <span className="menu-arrow"></span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span> Level 2 </span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="#">
                            <span> Level 2 </span>
                            <span className="menu-arrow"></span>
                          </a>
                          <ul>
                            <li>
                              <a href="#"> Level 3 </a>
                            </li>
                            <li>
                              <a href="#"> Level 3 </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span> Level 2 </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <span> Level 1 </span>
                      </a>
                    </li>
                  </ul>
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
