import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAlert,
  CButton,
  CSpinner,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Card, Col, Media, Row, Tab, Tabs } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { withRouter } from "react-router-dom";
import Donut from "../../_components/progressbar/Chart1";
import ProgressBBar from "../../_components/progressbar/ProgressBar";
import $ from "jquery";
const IMAGES = [
  {
    image: "01",
    bigImage: "/assets/img/boards/stm32f429i-discovery.png",
  },
  {
    image: "02",
    bigImage: "/assets/img/boards/nucleo.jpg",
  },
];
const Allert = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      $("#alert-box")
        .addClass("show")
        .delay(3500)
        .queue(function () {
          $(this).removeClass("show").dequeue();
          // setVisible(!visible)
        });
    }
  }, [visible]);
  return (
    <div>
      <div id="alert-box">
        <CAlert color="primary" visible={visible}>
          A simple primary alert—check it out!
        </CAlert>
      </div>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Show live alert
      </CButton>
    </div>
  );
};
export const Board = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const [tab, settab] = useState(0);
  const [activeItemkey, setactiveItemkey] = useState(1);

  let card_name = props.history.location.state.card_name;
  return (
    <div className="main-wrapper login-body">
      {isOpen && (
        <div className="col-6 mb-1 p-1">
          <Lightbox
            mainSrc={IMAGES[tab].bigImage}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              settab((tab) => (tab + IMAGES.length - 1) % IMAGES.length)
            }
            onMoveNextRequest={() => settab((tab) => (tab + 1) % IMAGES.length)}
          />
        </div>
      )}
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Board {card_name}</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/boardslist"> Boards </a>
              </li>
              <li className="breadcrumb-item active"> {card_name}</li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <section className="comp-section comp-dropdowns">
          {/* <div className="section-header">
            <h4 className="section-title"> Tabs </h4>
            <div className="line"> </div>
          </div> */}
          <Row>
            <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
              <Tab eventKey="overview" title="Overview">
                <div className="about-info">
                  <h5> Card OverView </h5>
                  <Card>
                    <Media
                      style={{
                        // justifyContent: "center",
                        // textAlign: "center",
                        display: "flex",
                        // alignItems: "center",
                      }}
                      className="me-3 d-flex"
                    >
                      <img
                        src="/assets/img/boards/stm32f429i-discovery.png"
                        alt="STM32"
                        onClick={() => {
                          setisOpen(true);
                        }}
                      />
                      <Media.Body
                        id="card-overview"
                        style={{
                          display: "flex",
                          width: "auto",
                          alignItems: "center",
                        }}
                      >
                        <ul>
                          <li>
                            <span className="title-span">Card Full Name:</span>
                            <span className="info-span">STM32F4XXXXXXXXXX</span>
                          </li>
                          <li>
                            <span className="title-span"> Familly: </span>
                            <span className="info-span">F4</span>
                          </li>
                          <li>
                            <span className="title-span"> State: </span>
                            <span className="info-span">
                              Available(NOT IN USE)
                            </span>
                          </li>
                          <li>
                            <span className="title-span"> Last Use: </span>
                            <span className="info-span">Tuesday ...</span>
                          </li>
                          <li>
                            <span className="title-span"> DataSheet: </span>
                            <span className="info-span"> Available </span>
                          </li>
                        </ul>
                      </Media.Body>
                    </Media>
                  </Card>
                </div>
              </Tab>
              <Tab eventKey="makeexam" title="Make Exam">
                <div className="row">
                  <CAccordion activeItemKey={activeItemkey}>
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>Submitting file code</CAccordionHeader>
                      <CAccordionBody>
                        <div className="col-sm-12">
                          <div className="shadow-card">
                            <div className="card-header">
                              <h5 className="card-title mb-2">
                                Supported elements
                              </h5>
                              <p className="card-text">
                                before making exam in board {card_name} , you
                                must agree to terms and conditions 🤞
                                <li>Condition 1</li>
                                <li>Condition 2</li>
                                <li>Condition 3</li>
                                <li>....</li>
                              </p>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm">
                                  <form className="was-validated">
                                    <div className="form-group">
                                      <label
                                        className="custom-file-label"
                                        htmlFor="validatedCustomFile"
                                      >
                                        Select board
                                      </label>
                                      <select className="form-select" required>
                                        <option defaultValue="1">
                                          STM32F4.....1
                                        </option>
                                        <option defaultValue="2">
                                          STM32F4.....2
                                        </option>
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="custom-file-label"
                                        htmlFor="validatedCustomFile"
                                      >
                                        Choose file (.hex/.bin)
                                      </label>
                                      <select className="form-select" required>
                                        <option defaultValue="1">.hex</option>
                                        <option defaultValue="2">.bin</option>
                                      </select>
                                    </div>
                                    <div className="custom-file">
                                      <label
                                        className="custom-file-label"
                                        htmlFor="validatedCustomFile"
                                      >
                                        Choose file (.hex/.bin)
                                      </label>
                                      <input
                                        type="file"
                                        className="form-control"
                                        id="validatedCustomFile"
                                        required
                                      />
                                      <div className="invalid-feedback">
                                        Example invalid custom file feedback
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="form-check">
                                        <br />
                                        <label
                                          className="form-check-label"
                                          htmlFor="invalidCheck3"
                                        >
                                          Agree to terms and conditions
                                        </label>
                                        <input
                                          className="form-check-input is-invalid"
                                          type="checkbox"
                                          defaultValue=""
                                          id="invalidCheck3"
                                          required
                                        />
                                        <div className="invalid-feedback">
                                          You must agree before submitting.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="invalid-feedback">
                                      Example invalid custom happened
                                    </div>
                                    <div
                                      style={{
                                        justifyContent: "end",
                                        display: "flex",
                                      }}
                                    >
                                      <button
                                        className="btn btn-info"
                                        type="submit"
                                        onClick={() => {
                                          console.log("...", activeItemkey);
                                          setactiveItemkey(2);
                                        }}
                                      >
                                        Make Exam
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={2}>
                      <CAccordionHeader>
                        Results and feedback &nbsp;
                        <CSpinner size="sm" color="success" variant="grow" />
                      </CAccordionHeader>
                      <CAccordionBody>
                        <div className="col-sm-12">
                          <div className="shadow-card">
                            <div className="card-header">
                              <h5 className="card-title mb-2">
                                Waiting for results
                              </h5>
                              <p className="card-text">
                                Uploading file in server 🤞
                              </p>
                            </div>
                            <div className="card-body">
                              <div>
                                {/* <CProgress height={1} className="mb-3">
                                  <CProgressBar value={25}></CProgressBar>
                                </CProgress> */}

                                {/* <CProgress height={20} className="mb-3">
                                  <CProgressBar
                                    variant="striped"
                                    animated={true}
                                    value={25}
                                  ></CProgressBar>
                                </CProgress> */}
                                <div className="teaching-card">
                                  <ul className="activity-feed">
                                    <li className="feed-item">
                                      <div className="feed-date1">
                                        Sep 04, 2 pm - 3 pm
                                      </div>
                                      <span className="feed-text1">
                                        <a> Uploading file in server </a>
                                      </span>

                                      <p>
                                        <span id="completed"> Completed </span>
                                      </p>
                                    </li>
                                    <li className="feed-item">
                                      <div className="feed-date1">
                                        Sep 05, 9 am - 10 am
                                      </div>
                                      <span className="feed-text1">
                                        <a> Uploading file to board </a>
                                        <br />
                                        <br />

                                        <a>
                                          <ProgressBBar />
                                        </a>
                                      </span>
                                      <p>
                                        <span id="inprogress">In Progress</span>
                                      </p>
                                    </li>
                                    <li className="feed-item">
                                      <div className="feed-date1">
                                        Sep 02, 1 pm - 2 am
                                      </div>
                                      <span className="feed-text1">
                                        <a> Runing file code in board </a>
                                      </span>
                                      <p>
                                        <span id="inprogress">In Progress</span>
                                      </p>
                                    </li>
                                    <li className="feed-item">
                                      <div className="feed-date1">
                                        Sep 02, 1 pm - 2 am
                                      </div>
                                      <span className="feed-text1">
                                        <a>
                                          Writing your report (video|text|pdf)
                                          file
                                        </a>
                                      </span>
                                      <p>
                                        <span id="failed"> Failed </span>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shadow-card">
                            <div className="card-header">
                              <h5 className="card-title mb-2">REPPORT</h5>
                              <p className="card-text">
                                Repport (video|text|pdf) file here
                              </p>
                            </div>
                            <div className="card-body">
                              <div>
                                <Allert />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </div>
              </Tab>
              <Tab eventKey="statestic" title="Statestic">
                <Donut />
              </Tab>
            </Tabs>
          </Row>
        </section>
      </Row>
    </div>
  );
};
withRouter(Board);
