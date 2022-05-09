import { faDownload } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import Load from "../../_components/progressbar/Load";
import { GetTeacherStudent } from "../../_services/app-services";
import ProfileCard from "../Profile/ProfileCard";

const data = [
  {
    id: "1",
    name: "Aaliyah",
    email: "test@g.com",
    img_url: "assets/img/profiles/avatar-01.jpg",
  },
];

const StudentsList = (props) => {
  console.log("props", props);
  const [loading, setloading] = useState(false);
  const [students, setstudents] = useState([]);

  useEffect(() => {
    setloading(true);
    GetTeacherStudent("STUDENT")
      .then((res) => {
        console.log("res", res);
        setstudents(res);
        setloading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setloading(false);
      });
  }, []);
  return (
    <div>
      <div className="page-header">
        <div className="page-header">
          <Row>
            <Col className="col">
              <h3 className="page-title"> Students </h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard"> Dashboard </a>
                </li>
                <li className="breadcrumb-item active"> Students </li>
              </ul>
            </Col>
            <Col className="col-auto text-end float-right ms-auto">
              <a type="button" className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faDownload} /> Download
              </a>
            </Col>
          </Row>
        </div>
      </div>

      {loading ? (
        <Load title={"loading ..."} />
      ) : (
        <Card>
          <Card.Body>
            {students.length > 0 ? (
              <>
                {students.map((student, index) => {
                  return (
                    <div className="profile-header" style={{ margin: "4px" }}>
                      <div className="row align-items-center">
                        <ProfileCard {...student} key={index} />
                        <div className="col-auto profile-btn">
                          <a
                            onClick={() => {
                              props.history.push("/student-details", {
                                student: student,
                              });
                            }}
                            type="button"
                            className="btn btn-primary"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div style={{ textAlign: "center", paddingTop: "5%" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "revert",
                      display: "contents",
                    }}
                  >
                    No Students
                  </p>
                </div>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export { StudentsList };
