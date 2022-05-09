import {
  faDownload,
  faPencilAlt,
  faPlus,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// Import Components
import { Card, Col, Row } from "react-bootstrap";
import Load from "../../_components/progressbar/Load";

//Import Data Table
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { GetUserExam } from "../../_services/app-services";

let storage;
export const Exam = (props) => {
  const [loading, setloading] = useState(false);
  const [examitems, setexamitmes] = useState([]);
  const [user, setuser] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("login")) {
      storage = localStorage.getItem("login");
      let user = JSON.parse(storage || JSON.stringify({}));
      setuser(user.user)
    }
  }, [])
  useEffect(() => {
    setloading(true);

    GetUserExam().then((res) => {
      console.log("res", res);
      setexamitmes(res);
      setloading(false);
    }).catch((err) => {
      console.log("err", err);
      setloading(false);
    })

  }, []);

  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Exam List </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/exam"> Exams </a>
              </li>
              <li className="breadcrumb-item active"> Exam List </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12} className="mb-5">
          <Card className="flex-fill">
            <Card.Header>
              <h5 className="card-title"> {user != null && user.kind} Exams </h5>
            </Card.Header>
            <div>
              {loading ? (
                <Load title={"loading ..."} />
              ) : (
                <>
                  {examitems.length > 0 ? (
                    <div class="content">
                      <div class="table-responsive custom-table-responsive">
                        <table class="table custom-table">
                          <thead>
                            <tr scope="row">
                              <th scope="col">Created By</th>

                              <th scope="col">Content</th>

                              <th scope="col">Created At</th>
                              <th scope="col">File</th>
                              <th scope="col">State</th>
                            </tr>
                          </thead>
                          {examitems.map((exam, index) => {
                            let date_exam = new Date(exam.created_at)
                            return <>
                              <tbody>
                                <td>
                                  <a href="/profile">{exam.name}</a>
                                </td>
                                <td>
                                  <a> make exam </a>
                                </td>
                                <td>
                                  <a>{date_exam.toDateString()}</a>

                                </td>

                                <td>
                                  <a href={exam.file}>File</a>
                                </td>
                                <td>
                                  <small>{exam.state}</small>
                                </td>


                              </tbody></>
                          })}

                        </table>
                      </div>
                    </div>
                  ) : (

                    <div style={{ textAlign: "center", paddingTop: "5%" }}>
                      <p
                        style={{
                          color: "black",
                          fontWeight: "revert",
                          display: "contents",
                        }}
                      >
                        No Exams
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
            <Card.Body>



            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

  );
};

withRouter(Exam);
