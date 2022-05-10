import React from "react";
import { Card, Col, Media, Row } from "react-bootstrap";

const StudentDetails = (props) => {
  console.log("propssss", props);
  // props.location.state.student
  const { id, name, dob, parentName, mobileNumber, address, img_url, about } =
    props.location.state
      ? props.location.state.student
      : {
        // static data ................
        id: "PRE2209",
        name: "Aaliyah",
        dob: "2 Feb 2002",
        parentName: "Jeffrey Wong",
        mobileNumber: "097 3584 5870",
        address: "911 Deer Ridge Drive,USA",
        about: "Lorem ipsum dolor sit amet.",
        img_url: "assets/img/profiles/avatar-01.jpg",
      };
  return (
    <div>
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Student Details </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/students"> Student </a>
              </li>
              <li className="breadcrumb-item active"> Student Details </li>
            </ul>
          </Col>
        </Row>
      </div>

      <Card>
        <Card.Body>
          <Row>
            <Col xs={12}>
              <div className="about-info">
                <h4> About {name} </h4>
                <br></br>
                <Media className="me-3 d-flex" style={{ "justifyContent": "space-around", "alignItems": "center" }}>
                  <img src={img_url} style={{ "borderRadius": "50% 50%" }} alt="user Image" />
                  <br></br>
                  <Media.Body>
                    <ul>
                      <li>
                        <span className="title-span"> Full Name: </span>
                        <span className="info-span">{name} </span>
                      </li>
                      <li>
                        <span className="title-span"> Email: </span>
                        <span className="info-span"> daisy @gmail.com </span>
                      </li>
                      <li>
                        <span className="title-span"> KIND: </span>
                        <span className="info-span"> Teacher </span>
                      </li>
                      <li>
                        <span className="title-span"> Gender: </span>
                        <span className="info-span"> Male </span>
                      </li>
                    </ul>
                  </Media.Body>
                </Media>
              </div>
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </div>
  );
};

export { StudentDetails };

