import {
  faBookOpen,
  faClipboardCheck,
  faClock,
  faHourglassEnd,
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import React, { useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";
import { Link } from "react-router-dom";

// Revenue Chart
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Teachers",
      backgroundColor: "rgb(25 175 251 / 20%)",
      borderColor: "#19affb",
      borderWidth: 3,
      hoverBackgroundColor: "#19affb",
      hoverBorderColor: "#19affb",
      data: [49, 22, 23, 65, 43, 21, 56, 57],
    },
    {
      label: "Students",
      backgroundColor: "rgb(253 187 56 / 20%)",
      borderColor: "#fdbb38",
      borderWidth: 3,
      hoverBackgroundColor: "#fdbb38",
      hoverBorderColor: "#fdbb38",
      data: [43, 21, 56, 57, 70, 23, 43, 21],
    },
  ],
};

// Student Chart
const dataBar = {
  labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
  datasets: [
    {
      label: "Boys",
      backgroundColor: "#19affb",
      hoverBackgroundColor: "#19affb",
      hoverBorderColor: "#19affb",
      data: [497, 452, 273, 635, 483, 621, 556],
    },
    {
      label: "Girls",
      backgroundColor: "#fdbb38",
      hoverBackgroundColor: "#fdbb38",
      hoverBorderColor: "#fdbb38",
      data: [443, 351, 526, 537, 750, 453, 643, 721],
    },
  ],
};

const StudentDashboard = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#calendar-doctor").simpleCalendar({
        fixedStartDay: 0, // begin weeks by sunday
        disableEmptyDetails: true,
        events: [
          // generate new event after tomorrow for one hour
          {
            startDate: new Date(
              new Date().setHours(new Date().getHours() + 24)
            ).toDateString(),
            endDate: new Date(
              new Date().setHours(new Date().getHours() + 25)
            ).toISOString(),
            summary: "Conference with teachers",
          },
          // generate new event for yesterday at noon
          {
            startDate: new Date(
              new Date().setHours(
                new Date().getHours() - new Date().getHours() - 12,
                0
              )
            ).toISOString(),
            endDate: new Date(
              new Date().setHours(
                new Date().getHours() - new Date().getHours() - 11
              )
            ).getTime(),
            summary: "Old classes",
          },
          // generate new event for the last two days
          {
            startDate: new Date(
              new Date().setHours(new Date().getHours() - 48)
            ).toISOString(),
            endDate: new Date(
              new Date().setHours(new Date().getHours() - 24)
            ).getTime(),
            summary: "Old Lessons",
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title"> Welcome Bruklin! </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard"> Dashboard </Link>
              </li>
              <li className="breadcrumb-item active"> Student Dashboard </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */} {/* Overview Section */}
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card bg-nine w-100">
            <div className="card-body">
              <div className="db-widgets d-flex justify-content-between align-items-center">
                <div className="db-icon">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <div className="db-info">
                  <h3> 04 / 06 </h3> <h6> All Courses </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card bg-nine w-100">
            <div className="card-body">
              <div className="db-widgets d-flex justify-content-between align-items-center">
                <div className="db-icon">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <div className="db-info">
                  <h3> 04 / 06 </h3> <h6> All Courses </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card bg-nine w-100">
            <div className="card-body">
              <div className="db-widgets d-flex justify-content-between align-items-center">
                <div className="db-icon">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <div className="db-info">
                  <h3> 04 / 06 </h3> <h6> All Courses </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card bg-six w-100">
              <div className="card-body">
                <div className="db-widgets d-flex justify-content-between align-items-center">
                  <div className="db-icon">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </div>
                  <div className="db-info">
                    <h3> 40 / 60 </h3> <h6> All Projects </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card bg-ten w-100">
              <div className="card-body">
                <div className="db-widgets d-flex justify-content-between align-items-center">
                  <div className="db-icon">
                    <FontAwesomeIcon icon={faClipboardList} />
                  </div>
                  <div className="db-info">
                    <h3> 30 / 50 </h3> <h6> Test Attended </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card bg-eleven w-100">
              <div className="card-body">
                <div className="db-widgets d-flex justify-content-between align-items-center">
                  <div className="db-icon">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </div>
                  <div className="db-info">
                    <h3> 10 / 20 </h3> <h6> Test Passed </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      {/* /Overview Section */} {/* Student Dashboard */}
      <div className="row">
        <div className="col-12 col-lg-12 col-xl-9">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="card-title"> Today’ s Lesson </h5>
                </div>
                <div className="col-6">
                  <span className="float-right view-link">
                    <a href="#"> View All Courses </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="dash-circle">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-6 dash-widget3">
                  <div className="card-body dash-widget1">
                    <div className="circle-bar circle-bar2">
                      <ProgressBar
                        width={15}
                        radius={40}
                        progress={20}
                        rotate={-210}
                        strokeWidth={8}
                        strokeColor="#6e6bfa"
                        strokeLinecap="square"
                        trackStrokeWidth={8}
                        trackStrokeColor="#e6e6e6"
                        trackStrokeLinecap="square"
                        pointerRadius={0}
                        initialAnimation={true}
                        transition="1.5s ease 0.5s"
                        trackTransition="0s ease"
                      >
                        <div className="indicator-volume">
                          <b> 20 % </b>
                        </div>
                      </ProgressBar>
                      <h6> Lesson Learned </h6>
                      <h4>
                        10 <span> / 50</span>
                      </h4>
                    </div>
                    <div className="dash-details">
                      <h4> Facilisi etiam </h4>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faClock} /> 2.30pm - 3.30pm
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faBookOpen} /> 5 Lessons
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHourglassEnd} /> 60 Minutes
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faClipboardCheck} /> 5
                          Asignment
                        </li>
                      </ul>
                      <div className="dash-btn">
                        <button
                          type="submit"
                          className="btn btn-info btn-border"
                        >
                          Skip
                        </button>
                        <button type="submit" className="btn btn-info">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-6 dash-widget4">
                  <div className="card-body dash-widget1 dash-widget2">
                    <div className="circle-bar circle-bar2">
                      <ProgressBar
                        width={15}
                        radius={40}
                        progress={50}
                        rotate={-210}
                        strokeWidth={8}
                        strokeColor="#6e6bfa"
                        strokeLinecap="square"
                        trackStrokeWidth={8}
                        trackStrokeColor="#e6e6e6"
                        trackStrokeLinecap="square"
                        pointerRadius={0}
                        initialAnimation={true}
                        transition="1.5s ease 0.5s"
                        trackTransition="0s ease"
                      >
                        <div className="indicator-volume">
                          <b> 50 % </b>
                        </div>
                      </ProgressBar>
                      <h6> Lesson Learned </h6>
                      <h4>
                        25 <span> / 50</span>
                      </h4>
                    </div>
                    <div className="dash-details">
                      <h4> Augue mauris </h4>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faClock} /> 2.30pm - 3.30pm
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faBookOpen} /> 5 Lessons
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHourglassEnd} /> 60 Minutes
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faClipboardCheck} /> 5
                          Asignment
                        </li>
                      </ul>
                      <div className="dash-btn">
                        <button
                          type="submit"
                          className="btn btn-info btn-border"
                        >
                          Skip
                        </button>
                        <button type="submit" className="btn btn-info">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12 col-xl-8 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="card-title"> Learning Activity </h5>
                    </div>
                    <div className="col-6">
                      <ul className="list-inline-group text-end mb-0 pl-0">
                        <li className="list-inline-item">
                          <div className="form-group mb-0 amount-spent-select">
                            <select className="form-control form-control-sm">
                              <option> Weekly </option>
                              <option> Monthly </option>
                              <option> Yearly </option>
                            </select>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body" id="apexcharts-area">
                  {/* <Line data={data} height={250} /> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title"> Learning History </h5>
                </div>
                <div className="card-body">
                  <div className="teaching-card">
                    <ul className="activity-feed">
                      <li className="feed-item">
                        <div className="feed-date1">
                          Sep 05, 9 am - 10 am(60 min)
                        </div>
                        <span className="feed-text1">
                          <a> Lorem ipsum dolor </a>
                        </span>
                        <p>
                          <span> In Progress </span>
                        </p>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date1">
                          Sep 04, 2 pm - 3 pm(70 min)
                        </div>
                        <span className="feed-text1">
                          <a> Et dolore magna </a>
                        </span>
                        <p> Completed </p>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date1">
                          Sep 02, 1 pm - 2 am(80 min)
                        </div>
                        <span className="feed-text1">
                          <a> Exercitation ullamco </a>
                        </span>
                        <p>
                          <span> In Progress </span>
                        </p>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date1">
                          Aug 30, 10 am - 12 pm(90 min)
                        </div>
                        <span className="feed-text1">
                          <a> Occaecat cupidatat </a>
                        </span>
                        <p> Completed </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-12 col-xl-3 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-12">
                  <h5 className="card-title"> Calendar </h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="calendar-doctor" className="calendar-container" />
              <div className="calendar-info calendar-info1">
                <div className="calendar-details">
                  <p> 09 am </p>
                  <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                    Fermentum <span> 09 am - 10 pm </span>
                  </h6>
                </div>
                <div className="calendar-details">
                  <p> 10 am </p>
                  <h6 className="calendar-violet d-flex justify-content-between align-items-center">
                    Pharetra et <span> 10 am - 11 am </span>
                  </h6>
                </div>
                <div className="calendar-details">
                  <p> 11 am </p>
                  <h6 className="calendar-red d-flex justify-content-between align-items-center">
                    Break <span> 11 am - 11.30 am </span>
                  </h6>
                </div>
                <div className="calendar-details">
                  <p> 12 pm </p>
                  <h6 className="calendar-orange d-flex justify-content-between align-items-center">
                    Massa <span> 11.30 am - 12.00 pm </span>
                  </h6>
                </div>
                <div className="calendar-details">
                  <p> 09 am </p>
                  <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                    Fermentum <span> 09 am - 10 pm </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Student Dashboard */}
    </div>
  );
};

export default StudentDashboard;
