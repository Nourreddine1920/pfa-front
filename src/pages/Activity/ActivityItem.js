import React from "react";
// Import Components
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export const ActivityItem = (props) => {
  console.log("props...", props);
  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Activity Item </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/activity"> Activity </a>
              </li>
              <li className="breadcrumb-item active"> Activity Item </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12} className="mb-5">
          <div className="d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title">
                  Student or Teacher Activity History
                </h5>
              </div>
              <div className="card-body">
                <div className="teaching-card">
                  <ul className="activity-feed">
                    <li className="feed-item">
                      <div className="feed-date1">Sep 05, 9 am - 10 am</div>
                      <span className="feed-text1">
                        <a> Lorem ipsum dolor </a>
                      </span>
                      <p>
                        <span> In Progress </span>
                      </p>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date1">Sep 04, 2 pm - 3 pm</div>
                      <span className="feed-text1">
                        <a> Et dolore magna </a>
                      </span>
                      <p> Completed </p>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date1">Sep 02, 1 pm - 2 am</div>
                      <span className="feed-text1">
                        <a> Exercitation ullamco </a>
                      </span>
                      <p>
                        <span> In Progress </span>
                      </p>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date1">
                        Aug 30, 10 am - 12 pm(90 min)
                      </div>
                      <span className="feed-text1">
                        <a> Occaecat cupidatat </a>
                      </span>
                      <p> Completed </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

withRouter(ActivityItem);
