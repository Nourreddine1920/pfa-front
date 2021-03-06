import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import Load from "../../_components/progressbar/Load";
import { GetTeacherStudent } from "../../_services/app-services";
import ProfileCard from "../Profile/ProfileCard";
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
                              props.history.push("/profile-details", {
                                profile: student,
                              });
                            }}
                            type="button"
                            className="btn btn-info"
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

