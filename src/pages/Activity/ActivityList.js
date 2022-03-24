import React, { useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import $ from "jquery";
const timeLineActivitys = [
  {
    date: "Apr 3",
    desc: `<a href="/student"> John Doe </a> won 1st place in <a>Chess</a>`,
  },
  {
    date: "Apr 23",
    desc: `<a href="/student"> John Doe </a> won 1st place in <a>Chess</a>`,
  },
  {
    date: "Apr 27",
    desc: `<a href="/student"> Justin Lee </a> participated in &nbsp;<a href="/activityitem">Carrom</a>`,
  },
];
export const ActivityList = (props) => {
  useEffect(() => {
    $(".feed-item").animate(
      {
        scrollTop: $(document).height(),
      },
      "slow"
    );
  }, []);
  console.log("props...", props);
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
                {/* {timeLineActivitys.map((element) => {
                  return (
                    <li className="feed-item">
                      <div className="feed-date">{element.date} </div>
                      <span className="feed-text">{element.desc}</span>
                    </li>
                  );
                })} */}
                <li className="feed-item">
                  <div className="feed-date"> Apr 13 </div>
                  <span className="feed-text">
                    <a> John Doe (when click go to teacher profile) </a> upload
                    TP (homework/) <a>test.tp</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Mar 21 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a> view TP
                    (download/compleet-TP/InProgress...) &nbsp;
                    <a href="/activityitem">download</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Feb 2 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a>make test in board (upload(.hex/bin) file
                    / ...) &nbsp;
                    <a href="/activityitem">file.hex</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Apr 13 </div>
                  <span className="feed-text">
                    <a> John Doe </a> Give direct, real-time feedback{" "}
                    <a>feedback</a>
                  </span>
                </li>
                <li className="feed-item">
                  <div className="feed-date"> Mar 21 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a> participated in &nbsp;
                    <a href="/activityitem">Carrom</a>
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
