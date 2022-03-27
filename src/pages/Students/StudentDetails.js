import React from "react";
import { Card, Col, Media, ProgressBar, Row } from "react-bootstrap";

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
                <Media className="me-3 d-flex">
                  <img src={img_url} className="me-3" alt="..." />
                  <Media.Body>
                    <ul>
                      <li>
                        <span className="title-span"> Full Name: </span>
                        <span className="info-span">{name} </span>
                      </li>
                      <li>
                        <span className="title-span"> Mobile: </span>
                        <span className="info-span"> {mobileNumber} </span>
                      </li>
                      <li>
                        <span className="title-span"> Email: </span>
                        <span className="info-span"> daisy @gmail.com </span>
                      </li>
                      <li>
                        <span className="title-span"> Gender: </span>
                        <span className="info-span"> Male </span>
                      </li>
                      <li>
                        <span className="title-span"> DOB: </span>
                        <span className="info-span"> {dob} </span>
                      </li>
                    </ul>
                  </Media.Body>
                </Media>
                <Row className="mt-3">
                  <Col md={12}>
                    <p>{about}</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={12}>
                    <h5> Permanent Address </h5>
                    <p> 480, Estern Avenue, Courtage area, New York </p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={12}>
                    <h5> Present Address </h5>
                    <p> 480, Estern Avenue, Courtage area, New York </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <div className="skill-info">
                <Row className="mt-3">
                  <Col md={12}>
                    <h5> Education </h5>
                    <p className="mt-3">
                      Secondary Schooling at xyz school of secondary education,
                      Mumbai.
                    </p>
                    <p>
                      Higher Secondary Schooling at xyz school of higher
                      secondary education, Mumbai.
                    </p>
                    <p>
                      Bachelor of Science at Abc College of Art and Science,
                      Chennai.
                    </p>
                    <p>
                      Master of Science at Cdm College of Engineering and
                      Technology, Pune.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* <Row className="mt-2">
            <Col md={12}>
              <div className="skill-info">
                <h4> Settings </h4>
                <Form>
                  <Row>
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label> Username </Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label> Current Password </Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label> New Password </Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export { StudentDetails };
