import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
/**
 *
 * @param {event,state} props
 *
 * sending file to server  -> event(`sending`)
 * uploading file to board -> event(`uploading`)
 * runing file in board    -> event(`runing`)
 * writing result          -> event(`writing`)
 * *******************************************
 *  in an event [`inprogress` | `completed` | `failed`](state of exam)
 *  [`waiting`](state) default
 *
 */

const eventsList = ["sending", "uploading", "runing", "writing"]; // remove waiting event from list
const statesList = ["waiting", "inprogress", "completed", "failed"];
let _currentEventState = "waiting"; // from props.state(default waiting) state off the exam
const Uploading = (props) => {
  let currentEvent = props.currentEvent; // from props.event

  let waitingList = eventsList.slice(eventsList.indexOf(currentEvent) + 1);
  let completedList = eventsList.slice(0, eventsList.indexOf(currentEvent));
  // *************** just for demo *********************
  const [indexx, setindexx] = useState(0);
  const changeToNextEventState = (indexx) => {
    return statesList[indexx % 4];
  };
  const [currentEventState, setcurrentEventState] = useState(
    changeToNextEventState(indexx)
  );
  useEffect(() => {
    setTimeout(() => {
      setindexx(indexx + 1);
      setcurrentEventState(changeToNextEventState(indexx));
    }, 2200);
  });
  // *************** just for demo *********************

  return (
    <div className="card-body">
      <div>
        <div className="teaching-card">
          <ul className="activity-feed">
            {completedList.map((event, index) => {
              return (
                <li key={index + "xxxx"} id="sending" className="feed-item">
                  <div className="feed-date1">Sep 04, 2 pm - 3 pm</div>
                  <span className="feed-text1">
                    <a>
                      {event === "sending"
                        ? "Uploading file in server"
                        : event === "uploading"
                        ? "Uploading file to board"
                        : event === "runing"
                        ? "Runing file code in board"
                        : "Writing your report (video|text|pdf) file"}
                    </a>
                  </span>
                  <p>
                    <span id="completed"> Completed </span>
                  </p>
                </li>
              );
            })}
            {eventsList
              .slice(
                eventsList.indexOf(currentEvent),
                eventsList.indexOf(currentEvent) + 1
              )
              .map((event, index) => {
                return (
                  <li key={index + "yyyy"} id="sending" className="feed-item">
                    <div className="feed-date1">Sep 04, 2 pm - 3 pm</div>
                    <span className="feed-text1">
                      <a>
                        {event === "sending"
                          ? "Uploading file in server"
                          : event === "uploading"
                          ? "Uploading file to board"
                          : event === "runing"
                          ? "Runing file code in board"
                          : "Writing your report (video|text|pdf) file"}
                      </a>
                    </span>
                    <p>
                      {currentEventState === "waiting" ? (
                        <span id="waiting">Waiting</span>
                      ) : currentEventState === "inprogress" ? (
                        <span id="inprogress">In Progress</span>
                      ) : currentEventState === "completed" ? (
                        <span id="completed">Completed</span>
                      ) : (
                        <span id="failed">Failed</span>
                      )}
                    </p>
                  </li>
                );
              })}
            {waitingList.map((event, index) => {
              return (
                <li key={index + "zzzz"} id="sending" className="feed-item">
                  <div className="feed-date1">Sep 04, 2 pm - 3 pm</div>
                  <span className="feed-text1">
                    <a>
                      {event === "sending"
                        ? "Uploading file in server"
                        : event === "uploading"
                        ? "Uploading file to board"
                        : event === "runing"
                        ? "Runing file code in board"
                        : "Writing your report (video|text|pdf) file"}
                    </a>
                  </span>
                  <p>
                    <span id="waiting">Waiting</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Uploading);
