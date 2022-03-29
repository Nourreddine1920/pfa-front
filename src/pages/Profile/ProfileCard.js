import { faMapMarkerAlt, faPhone } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { withRouter } from "react-router-dom";

const ProfileCard = (props) => {
  // id: "PRE2209",
  // name: "Aaliyah",
  // dob: "2 Feb 2002",
  // parentName: "Jeffrey Wong",
  // mobileNumber: "097 3584 5870",
  // address: "911 Deer Ridge Drive,USA",
  // action: "",
  // img_url: "assets/img/profiles/avatar-01.jpg",
  const { id, name, dob, parentName, mobileNumber, address, img_url, about } =
    props;
  return (
    <>
      <div className="col-auto profile-image">
        <a type="button">
          <img className="rounded-circle" alt="User Image" src={img_url} />
        </a>
      </div>
      <div className="col ml-md-n2 profile-user-info">
        <h4 className="user-name mb-0"> {name} </h4>
        <br/>
        <h6 className="text-muted">
          <FontAwesomeIcon icon={faPhone} /> &nbsp; {mobileNumber}
        </h6>
        <div className="user-Location">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;
          {address}
        </div>
        <div className="about-text">{about}</div>
      </div>
    </>
  );
};
export default withRouter(ProfileCard);
