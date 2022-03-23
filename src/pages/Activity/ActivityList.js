import React from "react";
// Import Components
import { Col, Row, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export const ActivityList = (props) => {
    console.log('props...',props)
  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Activity List </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/activity"> Activity </a>
              </li>
              <li className="breadcrumb-item active"> Activity List </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12} className="mb-5">
        <Card className="flex-fill">
            <Card.Header>
              <h5 className="card-title"> Student or Teacher Activity </h5>
            </Card.Header>
            <Card.Body>
              <ul className="activity-feed">
                <li className="feed-item">
                  <div className="feed-date"> Apr 13 </div>
                  <span className="feed-text">
                    <a> John Doe </a> won 1st place in <a>Chess</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Mar 21 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a> participated in
                    &nbsp;<a href="/activityitem">Carrom</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Feb 2 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a>attended internation conference in
                    &nbsp;<a href="/activityitem">St.John School</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Apr 13 </div>
                  <span className="feed-text">
                    <a> John Doe </a> won 1st place in <a>Chess</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Mar 21 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a> participated in
                    &nbsp;<a href="/activityitem">Carrom</a>
                  </span>
                </li>
              </ul>
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </div>
  );
};

withRouter(ActivityList);
