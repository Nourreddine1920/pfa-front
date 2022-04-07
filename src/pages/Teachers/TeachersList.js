import {
  faDownload,
  faPencilAlt,
  faPlus,
  faTrash
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React ,  { useEffect, useState } from "react";
// Import Components
import { Card, Col, Pagination, Row } from "react-bootstrap";
//Import Data Table
import "react-data-table-component-extensions/dist/index.css";
import Load from "../../_components/progressbar/Load";
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
  {
    id: "PRE2213",
    name: "Malynne",
    class: "8",
    gender: "Female",
    subject: "Physics",
    section: "A",
    mobileNumber: "242 362 3100",
    address: "Bacardi Rd P.O. Box N-4880, New Providence",
    action: "",
    img_url: "assets/img/profiles/avatar-03.jpg",
  },
  {
    id: "PRE2143",
    name: "Levell Scott",
    class: "10",
    gender: "Male",
    subject: "Science",
    section: "B",
    mobileNumber: "026 7318 4366",
    address: "P.O. Box: 41, Gaborone",
    action: "",
    img_url: "assets/img/profiles/avatar-02.jpg",
  },
  {
    id: "PRE2431",
    name: "Minnie",
    class: "11",
    gender: "Male",
    subject: "History",
    section: "C",
    mobileNumber: "952 512 4909",
    address: "4771  Oral Lake Road, Golden Valley",
    action: "",
    img_url: "assets/img/profiles/avatar-03.jpg",
  },
  {
    id: "PRE1534",
    name: "Lois A",
    class: "10",
    gender: "Female",
    subject: "English",
    section: "B",
    mobileNumber: "413 289 1314",
    address: "2844 Leverton Cove Road, Palmer",
    action: "",
    img_url: "assets/img/profiles/avatar-04.jpg",
  },
  {
    id: "PRE2153",
    name: "Calvin",
    class: "9",
    gender: "Male",
    subject: "Mathematics",
    section: "C",
    mobileNumber: "701 753 3810",
    address: "1900  Hidden Meadow Drive, Crete",
    action: "",
    img_url: "assets/img/profiles/avatar-05.jpg",
  },
  {
    id: "PRE1434",
    name: "Vincent",
    class: "10",
    gender: "Male",
    subject: "Mathematics",
    section: "C",
    mobileNumber: "402 221 7523",
    address: "3979  Ashwood Drive, Omaha",
    action: "",
    img_url: "assets/img/profiles/avatar-07.jpg",
  },
  {
    id: "PRE2345",
    name: "Kozma  Tatari",
    class: "9",
    gender: "Female",
    subject: "Science",
    section: "A",
    mobileNumber: "04 2239 968",
    address: "Rruga E Kavajes, Condor Center, Tirana",
    action: "",
    img_url: "assets/img/profiles/avatar-08.jpg",
  },
  {
    id: "PRE2365",
    name: "John Chambers",
    class: "11",
    gender: "Male",
    subject: "Botony",
    section: "B",
    mobileNumber: "870 663 2334",
    address: "4667 Sunset Drive, Pine Bluff",
    action: "",
    img_url: "assets/img/profiles/avatar-09.jpg",
  },
  {
    id: "PRE1234",
    name: "Nathan Humphries",
    class: "10",
    gender: "Male",
    subject: "Biology",
    section: "A",
    mobileNumber: "077 3499 9959",
    address: "86 Lamphey Road, Thelnetham",
    action: "",
    img_url: "assets/img/profiles/avatar-10.jpg",
  },
];

const TeachersList = (props) => {
  console.log("props", props);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
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
            {data.map((teacher, index) => {
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

