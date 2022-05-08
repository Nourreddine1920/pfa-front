import {
  faDownload,
  faPencilAlt,
  faPlus,
  faTrash
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Import Components
import { Card, Col, Pagination, Row } from "react-bootstrap";
//Import Data Table
import "react-data-table-component-extensions/dist/index.css";
import Load from "../../_components/progressbar/Load";
import { GetTeacherStudent } from "../../_services/app-services";
import ProfileCard from "../Profile/ProfileCard";

const data = [
  {
    id: "PRE2209",
    name: "Aaliyah",
    class: "10",
    gender: "Female",
    subject: "Mathematics",
    section: "A",
    mobileNumber: "097 3584 5870",
    address: "911 Deer Ridge Drive,USA",
    action: "",
    img_url: "assets/img/profiles/avatar-01.jpg",
  },

];

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
            {teachers.map((teacher, index) => {
              return (
                <div className="profile-header" style={{ margin: "4px" }}>
                  <div className="row align-items-center">
                    <ProfileCard {...teacher} key={index} />
                    <div className="col-auto profile-btn">
                      <a
                        onClick={() => {
                          props.history.push("/teacher-details", {
                            teacher: teacher,
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
            <Pagination
              size="sm"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active> {1} </Pagination.Item>
              <Pagination.Item> {2} </Pagination.Item>
              <Pagination.Item> {3} </Pagination.Item> <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Card.Body>
        </Card>
      )}

    </div>
  );
};

export { TeachersList };

