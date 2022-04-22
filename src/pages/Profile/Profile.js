import { faCheck, faEdit } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { default as React, useEffect, useState } from "react";
// Import Components
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import { withRouter } from "react-router-dom";
import Load from "../../_components/progressbar/Load";
import { GetElabUser, TeacherUploadFile } from "../../_services/app-services";
import FileComp from "./Filecomp";
let initialValues = {};
const Profile = (props) => {
  const [servererror, setservererror] = useState("");
  let tableData;
  const [form, setForm] = useState(initialValues);
  const [selectedFile, setselectedFile] = useState(null);
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState([]);
  const [data, setdata] = useState([]);
  initialValues = {
    tp_file: selectedFile,
    name_tp: "",
  };
  function handelSubmit(e) {
    e.preventDefault();
    const _form = new FormData();
    _form.append("uploaded_file", form.tp_file);
    _form.append("name_tp", form.name_tp);
    TeacherUploadFile(_form)
      .then((res) => {
        setservererror(res);
      })
      .catch((e) => {
        console.log("error", e);
        setservererror(e);
      });
  }

  useEffect(() => {
    setloading(true);
    GetElabUser()
      .then((res) => {
        console.log("res", res);
        setuser(res[0]);
        setdata(res[0].files);
        setloading(false);
      })
      .catch((e) => {
        console.log("error", e);
        setloading(false);
      });
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
                    src={
                      !loading && user
                        ? user.photo
                        : "assets/img/profiles/avatar-13.jpg"
                    }
                  />
                </a>
              </div>
              {loading ? (
                <div className="col ml-md-n2 profile-user-info">
                  <h6 className="text-muted"> loading user profile </h6>
                </div>
              ) : (
                <div className="col ml-md-n2 profile-user-info">
                  <h4 className="user-name mb-0"> @{user.name} </h4>
                  <h6 className="text-muted"> {user.email} </h6>
                </div>
              )}

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
                      {/* <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Date of Birth
                        </p>
                        <p className="col-sm-9"> 24 Jul 1983 </p>
                      </div> */}
                      <div className="row">
                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                          Email
                        </p>
                        <p className="col-sm-9">johndoe @example.com</p>
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
              <Row>
                <div>
                  {loading ? (
                    <Load title={"loading ..."} />
                  ) : (
                    <>
                      {data.length > 0 ? (
                        <div class="content">
                          <div class="table-responsive custom-table-responsive">
                            <table class="table custom-table">
                              <thead>
                                <tr>
                                  <th scope="col">Created By</th>
                                  <th scope="col">Content</th>

                                  <th scope="col">Created At</th>
                                  <th scope="col">actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((file, index) => {
                                  return <FileComp {...file} key={index} />;
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : (
                        <p>no files</p>
                      )}
                    </>
                  )}
                </div>
              </Row>
              {/* <Card>
                <Card.Body>
                  <Card.Title> Uploaded files </Card.Title>
                </Card.Body>
              </Card> */}
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
                          className="form-control"
                          id="validatedCustomFile"
                          onChange={(e) => {
                            setForm((form) => ({
                              ...form,
                              name_tp: e.target.value,
                            }));
                          }}
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
                          accept=".pdf"
                          //value={selectedFile}
                          className="form-control"
                          id="validatedCustomFile"
                          onChange={(e) => {
                            setselectedFile(e.target.files[0]);
                            setForm((form) => ({
                              ...form,
                              tp_file: e.target.files[0],
                            }));
                          }}
                          required
                        />

                        <div className="invalid-feedback">
                          Please select a file
                        </div>
                      </div>
                      {servererror != "" && <p>{servererror}</p>}
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
