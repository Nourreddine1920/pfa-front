import {
  faCheck,
  faEdit,
  faMapMarkerAlt,
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Import Components
import { Card, Col, Pagination, Row, Tab, Tabs } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Load from "../../_components/progressbar/Load";
import ProfileCard from "../Profile/ProfileCard";

/* import Uploading from "./Uploading";
import MyPdf from "../../_components/PdfLoader";
 */

const data = [
  {
    id: "PRE2209",
    name: "Aaliyah",
    dob: "2 Feb 2002",
    parentName: "Jeffrey Wong",
    mobileNumber: "097 3584 5870",
    address: "911 Deer Ridge Drive,USA",
    about: "Hello SIR  , here you find the TP is completed !",

    img_url: "assets/img/profiles/avatar-03.jpg",
  },
  {
    id: "PRE2143",
    name: "Levell Scott",
    dob: "12 Apr 2002",
    parentName: "Jeffrey Scott",
    mobileNumber: "026 7318 4366",
    address: "P.O. Box: 41, Gaborone",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-02.jpg",
  },
  {
    id: "PRE2431",
    name: "Minnie",
    dob: "24 Feb 2000",
    parentName: "J Shaffer",
    mobileNumber: "952 512 4909",
    address: "4771  Oral Lake Road, Golden Valley",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-03.jpg",
  },
  {
    id: "PRE1534",
    name: "Lois A",
    dob: "22 Jul 2006",
    parentName: "Cleary Wong",
    mobileNumber: "413 289 1314",
    address: "2844 Leverton Cove Road, Palmer",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-04.jpg",
  },
  {
    id: "PRE2153",
    name: "Calvin",
    dob: "8 Dec 2003",
    parentName: "Minnie J Shaffer",
    mobileNumber: "701 753 3810",
    address: "1900  Hidden Meadow Drive, Crete",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-05.jpg",
  },
  {
    id: "PRE1252",
    name: "Joe Kelley",
    dob: "7 Oct 2000",
    parentName: "Vincent Howard",
    mobileNumber: "402 221 7523",
    address: "3979  Ashwood Drive, Omaha",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-06.jpg",
  },
  {
    id: "PRE1434",
    name: "Vincent",
    dob: "4 Jan 2002",
    parentName: "Kelley Joe",
    mobileNumber: "402 221 7523",
    address: "3979  Ashwood Drive, Omaha",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-07.jpg",
  },
  {
    id: "PRE2345",
    name: "Kozma  Tatari",
    dob: "1 Feb 2006",
    parentName: "Lombardi",
    mobileNumber: "04 2239 968",
    address: "Rruga E Kavajes, Condor Center, Tirana",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-08.jpg",
  },
  {
    id: "PRE2365",
    name: "John Chambers",
    dob: "13 Sept 2003",
    parentName: "Wong Jeffrey",
    mobileNumber: "870 663 2334",
    address: "4667 Sunset Drive, Pine Bluff",
    about: "Hello SIR  , here you find the TP is completed !",
    img_url: "assets/img/profiles/avatar-09.jpg",
  },
];

const Profile = (props) => {
  const [loading, setloading] = useState(false);
  function uploadingFile(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
      var fileuploaded = reader.result;
      callback(fileuploaded);
    };
    reader.readAsDataURL(file);
  }
  function handelSubmit(e) {
    e.preventDefault();
    console.log("values", form);
  }

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
  }, []);

  return (
    <div>
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Profile </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/activity"> Activitys </a>
              </li>
              <li className="breadcrumb-item active"> Profile </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12}>
          <div className="profile-header">
            <div className="row align-items-center">
              <div className="col-auto profile-image">
                <a type="button">
                  <img
                    className="rounded-circle"
                    alt="User Image"
                    src={"assets/img/profiles/avatar-13.jpg"}
                  />
                </a>
              </div>
              <div className="col ml-md-n2 profile-user-info">
                <h4 className="user-name mb-0"> John Doe </h4>
                <h6 className="text-muted"> UI / UX Design Team </h6>
                <div className="user-Location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, United
                  States
                </div>
                <div className="about-text">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className="col-auto profile-btn">
                <a
                  type="button"
                  onClick={() => {
                    props.history.push("/edit-student", {});
                  }}
                  className="btn btn-primary"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
          <Tabs
            defaultActiveKey="about"
            id="uncontrolled-tab-example"
            className="profile-menu"
          >
            <Tab eventKey="about" title="About">
              <Row>
                <Col lg={9}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <span> Personal Details </span>
                        <a
                          className="edit-link"
                          data-toggle="modal"
                          type="button"
                          onClick={() => {
                            props.history.push("/edit-student", {});
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} className="mr-1" />
                          Edit
                        </a>
                      </Card.Title>
                      <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Name
                        </p>
                        <p className="col-sm-9"> John Doe </p>
                      </div>
                      <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Date of Birth
                        </p>
                        <p className="col-sm-9"> 24 Jul 1983 </p>
                      </div>
                      <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Email ID
                        </p>
                        <p className="col-sm-9">johndoe @example.com</p>
                      </div>
                      <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Mobile
                        </p>
                        <p className="col-sm-9"> 305 - 310 - 5857 </p>
                      </div>
                      <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Address
                        </p>
                        <p className="col-sm-9 mb-0">
                          4663 Agriculture Lane, <br />
                          Miami, <br />
                          Florida - 33165, <br />
                          United States.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <span> Account Status </span>
                        <a
                          onClick={() => {
                            props.history.push("/edit-student", {});
                          }}
                          className="edit-link"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faEdit} className="mr-1" />
                          Edit
                        </a>
                      </Card.Title>
                      <button className="btn btn-success" type="button">
                        <FontAwesomeIcon icon={faCheck} className="mr-1" />
                        Active
                      </button>
                    </Card.Body>
                  </Card>

                  {/* <Card>
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <span> Skills </span>
                        <a className="edit-link" type="button">
                          <FontAwesomeIcon icon={faEdit} className="mr-1" />
                          Edit
                        </a>
                      </Card.Title>
                      <div className="skill-tags">
                        <span> Html5 </span> <span> CSS3 </span>
                        <span> WordPress </span> <span> Javascript </span>
                        <span> Android </span> <span> iOS </span>
                        <span> Angular </span> <span> PHP </span>
                      </div>
                    </Card.Body>
                  </Card> */}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="files" title="Files">
              <Card>
                <Card.Body>
                  <Card.Title> Uploaded files </Card.Title>
                  <Row>
                    <div>
                      {loading ? (
                        <Load title={"loading ..."} />
                      ) : (
                        <Card>
                          <Card.Body>
                            {data.map((student, index) => {
                              return (
                                <div
                                  className="profile-header"
                                  style={{ margin: "4px" }}
                                >
                                  <div className="row align-items-center">
                                    <ProfileCard {...student} key={index} />
                                    <div className="col-auto profile-btn">
                                      <a
                                        onClick={() => {
                                          props.history.push(
                                            "/student-details",
                                            {
                                              student: student,
                                            }
                                          );
                                        }}
                                        type="button"
                                        className="btn btn-primary"
                                      >
                                        View FILE
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <Pagination
                              size="sm"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Pagination.First />
                              <Pagination.Prev />
                              <Pagination.Item active> {1} </Pagination.Item>
                              <Pagination.Item> {2} </Pagination.Item>
                              <Pagination.Item> {3} </Pagination.Item>{" "}
                              <Pagination.Next />
                              <Pagination.Last />
                            </Pagination>
                          </Card.Body>
                        </Card>
                      )}
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="upload files" title="Upload Files">
              <Card>
                <Card.Body>
                  <Card.Title> Upload files </Card.Title>
                  <Row>
                    <form
                      className="was-validated"
                      onSubmit={(e) => handelSubmit(e)}
                    >
                      <div className="form-group">
                        <label
                          className="custom-file-label"
                          htmlFor="validatedCustomFile"
                        >
                          Titre Du TP
                        </label>
                        <input
                          type="text"
                          accept=".pdf"
                          //value={selectedFile}
                          className="form-control"
                          id="validatedCustomFile"
                          /* onChange={(e) => {
                            setselectedFile(e.target.files[0]);
                            setForm((form) => ({
                              ...form,
                              selected_file: e.target.files[0],
                            }));
                          }} */
                          required
                        />
                      </div>
                      <div className="custom-file">
                        <label
                          className="custom-file-label"
                          htmlFor="validatedCustomFile"
                        >
                          Choose File
                        </label>
                        <input
                          type="file"
                          // accept=".bin,.hex"
                          //value={selectedFile}
                          className="form-control"
                          id="validatedCustomFile"
                          /* onChange={(e) => {
                            setselectedFile(e.target.files[0]);
                            setForm((form) => ({
                              ...form,
                              selected_file: e.target.files[0],
                            }));
                          }} */
                          required
                        />
                        <div className="invalid-feedback">
                          Please select a file
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <br />

                          {/* <input
                            className="form-check-input is-invalid"
                            type="checkbox"
                            defaultValue=""
                            id="invalidCheck3"
                            required
                          /> */}
                        </div>
                      </div>

                      <div
                        style={{
                          justifyContent: "end",
                          display: "flex",
                        }}
                      >
                        <button className="btn btn-info" type="submit">
                          UPLOAD FILE
                        </button>
                      </div>
                    </form>
                  </Row>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="password" title="Password">
              <Card>
                <Card.Body>
                  <Card.Title> Change Password </Card.Title>
                  <Row>
                    <Col md={10} lg={6}>
                      <form>
                        <div className="form-group">
                          <label> Old Password </label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label> New Password </label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label> Confirm Password </label>
                          <input type="password" className="form-control" />
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Save Changes
                        </button>
                      </form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
export default withRouter(Profile);
