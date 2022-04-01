import { faDownload } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import Load from "../../_components/progressbar/Load";
import ProfileCard from "../Profile/ProfileCard";

const data = [
  {
    id: "PRE2209",
    name: "Aaliyah",
    dob: "2 Feb 2002",
    parentName: "Jeffrey Wong",
    mobileNumber: "097 3584 5870",
    address: "911 Deer Ridge Drive,USA",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-01.jpg",
  },
  {
    id: "PRE2213",
    name: "Malynne",
    dob: "3 June 2010",
    parentName: "Fields Malynne",
    mobileNumber: "242 362 3100",
    address: "Bacardi Rd P.O. Box N-4880, New Providence",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-03.jpg",
  },
  {
    id: "PRE2143",
    name: "Levell Scott",
    dob: "12 Apr 2002",
    parentName: "Jeffrey Scott",
    mobileNumber: "026 7318 4366",
    address: "P.O. Box: 41, Gaborone",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-02.jpg",
  },
  {
    id: "PRE2431",
    name: "Minnie",
    dob: "24 Feb 2000",
    parentName: "J Shaffer",
    mobileNumber: "952 512 4909",
    address: "4771  Oral Lake Road, Golden Valley",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-03.jpg",
  },
  {
    id: "PRE1534",
    name: "Lois A",
    dob: "22 Jul 2006",
    parentName: "Cleary Wong",
    mobileNumber: "413 289 1314",
    address: "2844 Leverton Cove Road, Palmer",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-04.jpg",
  },
  {
    id: "PRE2153",
    name: "Calvin",
    dob: "8 Dec 2003",
    parentName: "Minnie J Shaffer",
    mobileNumber: "701 753 3810",
    address: "1900  Hidden Meadow Drive, Crete",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-05.jpg",
  },
  {
    id: "PRE1252",
    name: "Joe Kelley",
    dob: "7 Oct 2000",
    parentName: "Vincent Howard",
    mobileNumber: "402 221 7523",
    address: "3979  Ashwood Drive, Omaha",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-06.jpg",
  },
  {
    id: "PRE1434",
    name: "Vincent",
    dob: "4 Jan 2002",
    parentName: "Kelley Joe",
    mobileNumber: "402 221 7523",
    address: "3979  Ashwood Drive, Omaha",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-07.jpg",
  },
  {
    id: "PRE2345",
    name: "Kozma  Tatari",
    dob: "1 Feb 2006",
    parentName: "Lombardi",
    mobileNumber: "04 2239 968",
    address: "Rruga E Kavajes, Condor Center, Tirana",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-08.jpg",
  },
  {
    id: "PRE2365",
    name: "John Chambers",
    dob: "13 Sept 2003",
    parentName: "Wong Jeffrey",
    mobileNumber: "870 663 2334",
    address: "4667 Sunset Drive, Pine Bluff",
    about:
      "Hello I am Daisy Parks.Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.",
    img_url: "assets/img/profiles/avatar-09.jpg",
  },
];

const StudentsList = (props) => {
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
            {data.map((student, index) => {
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

export { StudentsList };
