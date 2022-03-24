import React from "react";
// Import Components
import { Col, Row, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Demo from "../Demo/Demo";


export const Notifs = (props) => {
  
  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Notifications</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/profile"> Tarek brahmi </a>
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
          <Card.Body id="notifs">
            {/* <ul className="activity-feed notification-list">
              <li className="feed-item notification-message">
                <div className="feed-date"> 4 mins ago </div>
                <span className="feed-text">
                  <a href="#">
                    <div
                      className="media d-flex"
                      style={{
                        justifyContent: "space-around",
                        display: "flex",
                        backgroundColor: "aliceblue",
                        borderRadius: "5px 5px 26px",
                      }}
                    >
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-02.jpg"
                        />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Carlson Tech</span> has
                          approved <span className="noti-title">your estimate</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </span>
              </li>
              <li className="feed-item notification-message">
                <div className="feed-date"> 6 mins ago</div>
                <span className="feed-text">
                  <a href="#">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-11.jpg"
                        ></img>
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">International Software Inc </span> has sent you a invoice in the amount of <span className="noti-title">$218</span>
                        </p>
                        
                      </div>
                    </div>
                  </a>
                </span>
              </li>
              <li className="feed-item notification-message">
                <div className="feed-date">8 mins ago</div>
                <span className="feed-text">
                  <a href="#">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-17.jpg"
                        ></img>
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title"> Apple iPhone XR</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </span>
              </li>
            </ul> */}
            <Demo/>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

withRouter(Notifs);
