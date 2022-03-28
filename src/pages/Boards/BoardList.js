import React from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BoardComp from "./BoardComp";

const IMAGES = [
  {
    url: "/assets/img/boards/stm32f429i-discovery.png",
  },
  {
    url: "/assets/img/boards/nucleo.jpg",
  },
];
const boardslist = [
  {
    id_board: 1,
    name: "STM32.....",
    in_use: false,
    family: "F4",
    serial_number: "XXXXXXXXXXXXXXXXX1",
    gallery: [],
    state: "AVAILABLE",
    datasheet: "",
    exams: 3,
  },
  {
    id_board: 2,
    name: "STM32.....",
    in_use: false,
    family: "L5",
    serial_number: "XXXXXXXXXXXXXXXXX2",
    gallery: [],
    state: "AVAILABLE",
    datasheet: "",
    exams: 4,
  },
  {
    id_board: 3,
    name: "STM32.....",
    in_use: true,
    family: "F4",
    serial_number: "XXXXXXXXXXXXXXXXX3",
    gallery: [],
    state: "NOTAVAILABLE",
    datasheet: "",
    exams: 44,
  },
  {
    id_board: 4,
    name: "STM32.....",
    in_use: true,
    family: "F4",
    serial_number: "XXXXXXXXXXXXXXXXX3",
    gallery: [],
    state: "NOTAVAILABLE",
    datasheet: "",
    exams: 3,
  },
];
export const BoardList = (props) => {
  console.log("props...", props);
  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title"> Boards List </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/boardslist"> Boards </a>
              </li>
              <li className="breadcrumb-item active"> Boards List </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <div className="row">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="card-title">Availabe boards</h5>
                </div>
              </div>
            </div>
            <div className="dash-circle">
              <div className="row">
                {boardslist.map((board, index) => {
                  return <BoardComp {...board} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};
withRouter(BoardList);
