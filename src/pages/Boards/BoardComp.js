import { CSpinner } from "@coreui/react";
import {
  faBookOpen,
  faClipboardCheck,
  faClock,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "react-customizable-progressbar";
import { withRouter } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { EnqueUserRequest } from "../../_services/app-services";
import Swal from "sweetalert2";
const BoardComp = (props) => {
  const {
    id_board,
    name,
    in_use,
    family,
    serial_number,
    gallery,
    state,
    datasheet,
    exams,
    flash_memory_size,
    succeded_exams,
    last_use,
    boardqueue
  } = props;
  let _last_use_date = last_use !== "NEVERUSED" ? new Date(last_use) : last_use;
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return (
    <div className="col-12 col-lg-6 col-xl-6 dash-widget3">
      <div className="card-body dash-widget1">
        <div className="circle-bar">
          <ProgressBar
            width={15}
            radius={40}
            progress={
              exams === 0 ? 0 : Math.round((succeded_exams / exams) * 100)
            }
            rotate={-210}
            strokeWidth={8}
            strokeColor="#6e6bfa"
            strokeLinecap="square"
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            trackStrokeLinecap="square"
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
          >
            <div className="indicator-volume">
              <b>
                {exams === 0 ? 0 : Math.round((succeded_exams / exams) * 100)} %
              </b>
            </div>
          </ProgressBar>
          <h6>Test Passed</h6>
          <h4>
            {succeded_exams}
            <span> / {exams}</span>
          </h4>
        </div>
        <div className="dash-details">
          <h4>{name}</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClock} />
              &nbsp;
              {last_use !== "NEVERUSED" ? (
                <>
                  <ReactTimeAgo
                    date={_last_use_date}
                    locale="en-US"
                    timeStyle="twitter"
                  />
                </>
              ) : (
                last_use
              )}
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faBookOpen} /> {exams} Test
            </li>
            <br />
            <li>
              {state}&nbsp;
              <CSpinner
                size="sm"
                color={
                  state === "AVAILABLE"
                    ? "success"
                    : state === "NOTAVAILABLE"
                      ? "danger"
                      : "warning"
                }
                variant="grow"
              />
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faClipboardCheck} /> {family}
            </li>
          </ul>
          <div className="dash-btn">
            <button type="button" className="btn btn-info btn-border">
              Show more
            </button>
            <button
              onClick={() => {

                if (boardqueue === null) {
                  // call the api EnqueUserRequest
                  EnqueUserRequest(id_board)
                    .then((res) => {
                      if (res.status === 200) {
                        props.history.push("/board", {
                          id_board: id_board,
                          name: name,
                          in_use: in_use,
                          family: family,
                          serial_number: serial_number,
                          gallery: gallery,
                          state: state,
                          datasheet: datasheet,
                          exams: exams,
                          flash_memory_size: flash_memory_size,
                          succeded_exams: succeded_exams,
                          last_use: last_use,
                        });
                      }
                    })
                    .catch((err) => {
                      console.log("errrorrrr not in use", err);
                      Toast.fire({
                        icon: "error",
                        title: err,
                      });
                    });
                } else {
                  // here if board in use w create a request with current user and after that we disable button
                  // show popup indicate that user request is enqueued
                  // call the api EnqueUserRequest
                  if (boardqueue.last_user_request.is_from_me) {
                    EnqueUserRequest(id_board)
                      .then((res) => {
                        if (res.status === 200) {
                          props.history.push("/board", {
                            id_board: id_board,
                            name: name,
                            in_use: in_use,
                            family: family,
                            serial_number: serial_number,
                            gallery: gallery,
                            state: state,
                            datasheet: datasheet,
                            exams: exams,
                            flash_memory_size: flash_memory_size,
                            succeded_exams: succeded_exams,
                            last_use: last_use,
                          });
                        }
                      })
                      .catch((err) => {
                        console.log("errrorrrr not in use", err);
                        Toast.fire({
                          icon: "error",
                          title: err,
                        });
                      });
                  } else {

                    EnqueUserRequest(id_board)
                      .then((res) => {
                        if (res.status === 200) {
                          Toast.fire({
                            icon: "success",
                            title: res.data,
                          });
                        }
                      })
                      .catch((err) => {
                        Toast.fire({
                          icon: "error",
                          title: err,
                        });
                      });
                  }
                }
              }}
              type="button"
              className="btn btn-info"
            >
              {boardqueue === null ? "Make Exam" : boardqueue.last_user_request.is_from_me ? "Make exam" : "request"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(BoardComp);
