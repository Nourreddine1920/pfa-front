import React from "react";
// Import Components
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const EditTimeTable = () => {
  return (
    <div>
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Edit Time Table </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/time-table"> Time Table </a>
              </li>
              <li className="breadcrumb-item active"> Edit Time Table </li>
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
                      <span> Time Table </span>
                    </h5>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Teacher ID </Form.Label>
                      <Form.Control type="text" defaultValue="PRE1534" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Name </Form.Label>
                      <Form.Control type="text" defaultValue="Kozma  Tatari" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Class </Form.Label>
                      <Form.Control type="text" defaultValue="11" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Section </Form.Label>
                      <Form.Control type="text" defaultValue="B" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Subject </Form.Label>
                      <Form.Control type="text" defaultValue="Mathematics" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Date </Form.Label>
                      <Form.Control type="text" defaultValue="23 Jul 2020" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> Start Time </Form.Label>
                      <Form.Control type="text" defaultValue="01:00 PM" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label> End Time </Form.Label>
                      <Form.Control type="text" defaultValue="01:45 PM" />
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

export { EditTimeTable };
