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
            <Card.Body>
              {loading ? (
                <Load title={"loading ..."} />
              ) : (
                <>
                  {examitems.length > 0 ? (

                    <div className="card-body">
                      <div className="teaching-card">
                        <ul className="activity-feed">

                          {examitems.map((exam, index) => {
                            let date_exam = new Date(exam.created_at)
                            return (
                              <li className="feed-item" key={index}>
                                <div className="feed-date1">{date_exam.toDateString()}</div>
                                <span className="feed-text1">
                                  <a href="/profile">{exam.name}</a> make exam in <i>{exam.examsubject}</i> with binary file <a href={exam.file}>file</a>
                                </span>
                                <p>
                                  {exam.state === "COMPLETED" && <span id="completed"> Completed </span>}
                                  {exam.state === "INPROGRESS" && <span id="inprogress"> InProgress </span>}
                                  {exam.state === "FAILED" && <span id="failed"> Failed </span>}
                                  {exam.state === "OTHER" && <span id="waiting"> Other </span>}
                                </p>
                              </li>
                            )
                          })}

                        </ul>
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
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </div>

  );
};

withRouter(Exam);
