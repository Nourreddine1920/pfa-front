import {
  faBookOpen,
  faClipboardCheck,
  faClock,
  faHourglassEnd
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// Import Components
import { Card, Col, Row } from "react-bootstrap";
import ProgressBar from "react-customizable-progressbar";
import { withRouter } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MyPdf from "../../_components/PdfLoader";


const IMAGES = [
  {
    url: "/assets/img/boards/stm32f429i-discovery.png",
  },
  {
    url: "/assets/img/boards/nucleo.jpg",
  },
];
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
        <div className="row">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="card-title">Availabe boards</h5>
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
                      <h6>Test Passed</h6>
                      <h4>
                        10 <span> / 50</span>
                      </h4>
                    </div>
                    <div className="dash-details">
                      <h4>STM32F4</h4>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faClock} /> 2.30pm - 3.30pm
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faBookOpen} /> 5 Test
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
                          type="button"
                          className="btn btn-info btn-border"
                        >
                          Show more
                        </button>
                        <button
                          onClick={() => {
                            props.history.push("/board", {
                              card_name: "STM32F4",
                            });
                          }}
                          type="button"
                          className="btn btn-info"
                        >
                          Make Exam
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
                      <h6>Test Passed</h6>
                      <h4>
                        25 <span> / 50</span>
                      </h4>
                    </div>
                    <div className="dash-details">
                      <h4>STM32L5</h4>
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
                          type="button"
                          className="btn btn-info btn-border"
                        >
                          Show more
                        </button>
                        <button
                          onClick={() => {
                            props.history.push("/board", {
                              card_name: "STM32L5",
                            });
                          }}
                          type="button"
                          className="btn btn-info"
                        >
                          Make Exam
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-header">
            <Row>
              <Col md={12} lg={6}>
                <Card className="card-chart">
                  <Card.Header>
                    <Row className="align-items-center">
                      <Col>
                        <h5 className="card-title"> DataSheet </h5>
                      </Col>
                      <Col>
                        <ul className="list-inline-group text-end mb-0 pl-0">
                          <li className="list-inline-item">
                            <div className="form-group mb-0 amount-spent-select">
                              SELECTED CARD NAME
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body id="">
                    <MyPdf />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={12} lg={6}>
                <Card className="card-chart">
                  <Card.Header>
                    <Row className="align-items-center">
                      <Col>
                        <h5 className="card-title"> Board Galery </h5>
                      </Col>
                      <Col>
                        <ul className="list-inline-group text-end mb-0 pl-0">
                          <li className="list-inline-item">
                            <div className="form-group mb-0 amount-spent-select">
                              Images (slider )
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body id="">
                    <div>
                      <SimpleImageSlider
                        width={400}
                        height={600}
                        images={IMAGES}
                        showBullets={true}
                        showNavs={true}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </div>
  );
};
withRouter(BoardList);
