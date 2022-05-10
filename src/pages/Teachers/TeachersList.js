import {
  faDownload, faPlus
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Import Components
import { Card, Col, Row } from "react-bootstrap";
//Import Data Table
import "react-data-table-component-extensions/dist/index.css";
import Load from "../../_components/progressbar/Load";
import { GetTeacherStudent } from "../../_services/app-services";
import ProfileCard from "../Profile/ProfileCard";

const TeachersList = (props) => {
  console.log("props", props);
  const [loading, setloading] = useState(false);
  const [teachers, setteachers] = useState([]);
  useEffect(() => {
    setloading(true);
    GetTeacherStudent("TEACHER")
      .then((res) => {
        console.log("res", res);
        setteachers(res);
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
              <h3 className="page-title"> Teachers </h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard"> Dashboard </a>
                </li>
                <li className="breadcrumb-item active"> Teachers </li>
              </ul>
            </Col>
            <Col className="col-auto text-end float-right ms-auto">
              <a href="#" className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faDownload} /> Download
              </a>
              <a href="/add-teacher" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} />
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
            {teachers.length > 0 ? (
              <>
                {teachers.map((teacher, index) => {
                  return (
                    <div className="profile-header" style={{ margin: "4px" }}>
                      <div className="row align-items-center">
                        <ProfileCard {...teacher} key={index} />
                        <div className="col-auto profile-btn">
                          <a
                            onClick={() => {
                              props.history.push("/profile-details", {
                                profile: teacher,
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
                  No Teachers
                </p>
              </div>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export { TeachersList };

