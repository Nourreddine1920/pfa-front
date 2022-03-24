import React from "react";
// Import Components
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export const Board = (props) => {
  console.log("props...", props);
  let card_name = props.history.location.state.card_name;
  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Board {card_name}</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/boardslist"> Boards </a>
              </li>
              <li className="breadcrumb-item active"> {card_name}</li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        {/* <Col sm={12} className="mb-5"></Col> */}
      </Row>
    </div>
  );
};

withRouter(Board);
