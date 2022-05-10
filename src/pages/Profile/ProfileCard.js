import { faAt } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { withRouter } from "react-router-dom";

const ProfileCard = (props) => {
  const { id, name, email,img_url } = props;
  return (
    <>
      <div className="col-auto profile-image">
        <a type="button">
          <img className="rounded-circle" alt="User Image" src={img_url} />
        </a>
      </div>
      <div className="col ml-md-n2 profile-user-info">
        <h4 className="user-name mb-0"><FontAwesomeIcon icon={faAt} />  {name} </h4>
        <br />
        <h6 className="text-muted">
          &nbsp; {email}
        </h6>
      </div>
    </>
  );
};
export default withRouter(ProfileCard);
