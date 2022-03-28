import ProgressBar from "react-customizable-progressbar";
import {
  faBookOpen,
  faClipboardCheck,
  faClock,
  faHourglassEnd,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
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
  } = props;
  return (
    <div className="col-12 col-lg-6 col-xl-6 dash-widget3">
      <div className="card-body dash-widget1">
        <div className="circle-bar circle-bar2">
          <ProgressBar
            width={15}
            radius={40}
            progress={20}
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
              <b> 20 % </b>
            </div>
          </ProgressBar>
          <h6>Test Passed</h6>
          <h4>
            10 <span> / 50</span>
          </h4>
        </div>
        <div className="dash-details">
          <h4>{name}</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClock} /> 2.30pm - 3.30pm
            </li>
            <li>
              <FontAwesomeIcon icon={faBookOpen} /> {exams} Test
            </li>
            <li>
              <FontAwesomeIcon icon={faHourglassEnd} /> 60 Minutes
            </li>
            <li>
              <FontAwesomeIcon icon={faClipboardCheck} /> 5 Asignment
            </li>
          </ul>
          <div className="dash-btn">
            <button type="button" className="btn btn-info btn-border">
              Show more
            </button>
            <button
              onClick={() => {
                props.history.push("/board", {
                  card_name: name,
                });
              }}
              type="button"
              className="btn btn-info"
            >
              Make Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(BoardComp);
