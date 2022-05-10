import React from "react";
// Import Components
import { Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Notifs.css"


export const Notifs = (props) => {

  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Notifications</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/profile"> Profile </a>
              </li>
              <li className="breadcrumb-item active">Notifications </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Card className="flex-fill">
          <Card.Header>
            <h5 className="card-title"> Student or Teacher Notifications </h5>
          </Card.Header>
          <Card.Body >
            <ul class="timeline">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 -EE</p>
                  <h3>notif title</h3>
                  <p>
                    notif subject
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 -EE</p>
                  <h3>notif title</h3>
                  <p>
                    notif subject
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 -EE</p>
                  <h3>notif title</h3>
                  <p>
                    notif subject
                  </p>
                </div>
              </li>

            </ul>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

withRouter(Notifs);
