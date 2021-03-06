import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import ReactTimeAgo from "react-time-ago";
import Load from "../../_components/progressbar/Load";


import { GetUserActivity } from "../../_services/app-services";
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
let storage;
export const ActivityList = (props) => {
  const [activityitems, setactivityitmes] = useState([]);
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("login")) {
      storage = localStorage.getItem("login");
      let user = JSON.parse(storage || JSON.stringify({}));
      setuser(user.user)
    }
  }, [])
  useEffect(() => {
    $(".feed-item").animate(
      {
        scrollTop: $(document).height(),
      },
      "slow"
    );
  }, []);
  useEffect(() => {
    setloading(true);

    GetUserActivity().then((res) => {
      console.log("res", res);
      setactivityitmes(res);
      setloading(false);
    }).catch((err) => {
      console.log("err", err);
      setloading(false);
    })

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
              <h5 className="card-title"> {user != null && user.kind} Activity </h5>
            </Card.Header>
            <Card.Body>
              {loading ? (<Load title={"loading ..."} />) : (<>{activityitems.length > 0 ? (<ul className="activity-feed">
                {/* {timeLineActivitys.map((element) => {
                  return (
                    <li className="feed-item">
                      <div className="feed-date">{element.date} </div>
                      <span className="feed-text">{element.desc}</span>
                    </li>
                  );
                })} */}
                {activityitems.map((activity, index) => {
                  let d_activity = new Date(activity.created_at);
                  return <>
                    {activity.type_activity === 1 && <li key={activity.created_at} className="feed-item">
                      <div className="feed-date"> <ReactTimeAgo
                        date={d_activity}
                        locale="en-US"
                        timeStyle="twitter"
                      /> </div>
                      <span className="feed-text">
                        <a href="/profile"> {activity.name}</a>  make exam in board (upload(.hex/bin)) &nbsp;
                        <a href={activity.tp_activity}>file</a>
                      </span>
                    </li>}
                    {activity.type_activity === 0 && <li key={activity.created_at} className="feed-item">
                      <div className="feed-date"> <ReactTimeAgo
                        date={d_activity}
                        locale="en-US"
                        timeStyle="twitter"
                      />  </div>
                      <span className="feed-text">
                        <a href="/profile"> {activity.name} </a> upload
                        TP (homework/) <a href={activity.file}>TP</a>
                      </span>
                    </li>}</>
                })}

                {/* <li className="feed-item">
                  <div className="feed-date"> Mar 21 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a> view TP
                    (download/compleet-TP/InProgress...) &nbsp;
                    <a href="/activityitem">download</a>
                  </span>
                </li> */}

                {/* <li className="feed-item">
                  <div className="feed-date"> Apr 13 </div>
                  <span className="feed-text">
                    <a> John Doe </a> Give direct, real-time feedback{" "}
                    <a>feedback</a>
                  </span>
                </li> */}
                {/* <li className="feed-item">
                  <div className="feed-date"> Mar 21 </div>
                  <span className="feed-text">
                    <a> Justin Lee </a> participated in &nbsp;
                    <a href="/activityitem">Carrom</a>
                  </span>
                </li> */}
              </ul>) : (
                <div style={{ textAlign: "center", paddingTop: "5%" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "revert",
                      display: "contents",
                    }}
                  >
                    No Activities
                  </p>
                </div>)}</>)}


            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

withRouter(ActivityList);
