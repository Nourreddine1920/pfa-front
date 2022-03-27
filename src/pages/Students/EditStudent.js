import React from "react";
// Import Components
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const EditStudent = (props) => {
  return (
    <div>
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Edit Students </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/students"> Students </a>
              </li>
              <li className="breadcrumb-item active"> Edit Students </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Form>
                <Row>
                  <Col sm={12}>
                    <h5 className="form-title">
                      <span> Student Information </span>
                    </h5>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> First Name </Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue="Nathan Humphries"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Last Name </Form.Label>
                      <Form.Control type="text" defaultValue="Stephen Marley" />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Date of Birth </Form.Label>
                      <Form.Control type="date" defaultValue="26 Apr 1994" />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Student Image </Form.Label>
                      <Form.File className="form-control" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <h5 className="form-title">
                      <span> Contact Information </span>
                    </h5>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Mobile Number </Form.Label>
                      <Form.Control type="text" defaultValue="077 3499 9959" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Email Address</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue="stephenmarley@gmail.com"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Permanent Address </Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        defaultValue="86 Lamphey Road, Thelnetham"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export { EditStudent };
