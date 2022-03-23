import {
  faBookOpen,
  faClipboardCheck,
  faClock,
  faHourglassEnd,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
// Import Components
import { Col, Row } from "react-bootstrap";
import ProgressBar from "react-customizable-progressbar";
import { withRouter } from "react-router-dom";
import MyPdf from "../../_components/PdfLoader";
export const BoardList = (props) => {
  console.log("props...", props);
  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Boards List </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/boardslist"> Boards </a>
              </li>
              <li className="breadcrumb-item active"> Boards List </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12} className="mb-5"></Col>
        <div className="row">
          <div className="">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h5 className="card-title">Today’ s Lesson</h5>
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
                        <h6>Lesson Learned</h6>
                        <h4>
                          10 <span> / 50</span>
                        </h4>
                      </div>
                      <div className="dash-details">
                        <h4>Facilisi etiam</h4>
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
                        <h6>Lesson Learned</h6>
                        <h4>
                          25 <span> / 50</span>
                        </h4>
                      </div>
                      <div className="dash-details">
                        <h4>Augue mauris</h4>
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
          </div>
        </div>
      </Row>
      <MyPdf />
    </div>
  );
};

withRouter(BoardList);
