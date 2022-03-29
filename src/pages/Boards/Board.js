import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAlert,
  CAlertHeading,
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
import MyPdf from "../../_components/PdfLoader";
import SimpleImageSlider from "react-simple-image-slider";
import { useForm } from "react-hook-form";
import Uploading from "./Uploading";
const IMAGES = [
  {
    url: "/assets/img/boards/stm32f429i-discovery.png",
  },
  {
    url: "/assets/img/boards/nucleo.jpg",
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
const Alerts = () => {
  return (
    <CAlert color="success">
      <CAlertHeading tag="h4">Well done!</CAlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </CAlert>
  );
};
let initialValues = {};
const eventsList = ["sending", "uploading", "runing", "writing"]; // remove waiting event from list
export const Board = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const [tab, settab] = useState(0);

  const [selectedBoard, setselectedBoard] = useState(1);
  const [selectedTypeFile, setselectedTypeFile] = useState(1);
  const [selectedFile, setselectedFile] = useState(null);
  initialValues = {
    selected_board: selectedBoard,
    selected_type_file: selectedTypeFile,
    selected_file: selectedFile,
  };
  // const { control, handleSubmit, formState, errors } = useForm({
  //   defaultValues: { ...initialValues },
  //   mode: "onSubmit",
  // });
  // useEffect(()=>{
  //   $("#ACC1 > div.accordion-collpase.collapse").on
  // },[])
  const [form, setForm] = useState(initialValues);
  function handelSubmit(e) {
    e.preventDefault();
    console.log("values", form);
    // hide first accor
    $("#ACC1 > div.accordion-header > button").click();
    // show second accor
    $("#ACC2 > div.accordion-header > button").click();
    window.scrollTo(0, 20);
  }

  // *************** just for demo *********************
  const [indexx, setindexx] = useState(0);
  const changeToNextEvent = (indexx) => {
    return eventsList[indexx % 4];
  };
  const [currentEvent, setcurrentEvent] = useState(changeToNextEvent(indexx)); // come from ws
  useEffect(() => {
    setTimeout(() => {
      setindexx(indexx + 1);
      setcurrentEvent(changeToNextEvent(indexx));
    }, 8800);
  });
  // *************** just for demo *********************

  let card_name = props.history.location.state.card_name;
  return (
    <div className="main-wrapper login-body">
      {isOpen && (
        <div className="col-6 mb-1 p-1">
          <Lightbox
            mainSrc={IMAGES[tab].url}
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
        <div className="comp-section comp-dropdowns">
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
                        style={{ margin: "44px" }}
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
                            <span className="title-span">Flash Memeory:</span>
                            <span className="info-span">2MO</span>
                          </li>
                          <li>
                            <span className="title-span">In Use :</span>
                            <span className="info-span">By you </span>
                          </li>
                          <li>
                            <span className="title-span"> DataSheet: </span>
                            <span className="info-span"> Available </span>
                          </li>
                        </ul>
                      </Media.Body>
                    </Media>
                  </Card>
                  <Row>
                    <Col md={12} lg={6}>
                      <Card className="card-chart">
                        <Card.Header>
                          <Row className="align-items-center">
                            <Col>
                              <h5 className="card-title"> DataSheet </h5>
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
              </Tab>
              <Tab eventKey="makeexam" title="Make Exam">
                <div className="row">
                  <CAccordion activeItemKey={2}>
                    <CAccordionItem itemKey={1} id="ACC1">
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
                                  <form
                                    className="was-validated"
                                    onSubmit={(e) => handelSubmit(e)}
                                  >
                                    <div className="form-group">
                                      <label
                                        className="custom-file-label"
                                        htmlFor="validatedCustomFile"
                                      >
                                        Select board
                                      </label>
                                      <select
                                        className="form-select"
                                        required
                                        defaultValue={form.selected_board}
                                        onChange={(e) => {
                                          if (e.target.value !== 0) {
                                            console.log(
                                              "value card",
                                              e.target.value
                                            );
                                            // setselectedBoard(e.target.value);
                                            setForm((form) => ({
                                              ...form,
                                              selected_board: e.target.value,
                                            }));
                                          }
                                        }}
                                      >
                                        <option value={0} defaultChecked>
                                          ---------------
                                        </option>
                                        <option value={1}>STM32F4.....1</option>
                                        <option value={2}>STM32F4.....2</option>
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="custom-file-label"
                                        htmlFor="validatedCustomFile"
                                      >
                                        Choose file (.hex/.bin)
                                      </label>
                                      <select
                                        className="form-select"
                                        required
                                        value={form.selected_type_file}
                                        onChange={(e) => {
                                          if (e.target.value != 0) {
                                            // setselectedTypeFile(e.target.value);
                                            setForm((form) => ({
                                              ...form,
                                              selected_type_file:
                                                e.target.value,
                                            }));
                                          }
                                        }}
                                      >
                                        <option value={0} defaultChecked>
                                          ---------------
                                        </option>
                                        <option value={1}>.hex</option>
                                        <option value={2}>.bin</option>
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
                                        // accept=".bin,.hex"
                                        value={selectedFile}
                                        className="form-control"
                                        id="validatedCustomFile"
                                        onChange={(e) => {
                                          // setselectedFile(e.target.files[0])
                                          setForm((form) => ({
                                            ...form,
                                            selected_file: e.target.files[0],
                                          }));
                                        }}
                                        required
                                      />
                                      <div className="invalid-feedback">
                                        Please select a file with selected type
                                        file
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
                    <CAccordionItem itemKey={2} id="ACC2">
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
                                {currentEvent === "sending"
                                  ? "Uploading file in server "
                                  : currentEvent === "uploading"
                                  ? "Uploading file to board 🤞"
                                  : currentEvent === "runing"
                                  ? "Runing file code in board 🕖 "
                                  : "Writing your report (video|text|pdf) file"}
                              </p>
                            </div>
                            <Uploading currentEvent={currentEvent} />
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
                                {/* <Allert /> */}
                                <Alerts />
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
                here we can load more information about this card ..for example
                all exams
              </Tab>
            </Tabs>
          </Row>
        </div>
        {/* <div className="row">
        </div> */}
      </Row>
    </div>
  );
};
withRouter(Board);
