import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { GetBoards } from "../../_services/app-services";
import BoardComp from "./BoardComp";

const IMAGES = [
  {
    url: "/assets/img/boards/stm32f429i-discovery.png",
  },
  {
    url: "/assets/img/boards/nucleo.jpg",
  },
];

export const BoardList = (props) => {
  
  const [boardsList, setboardsList] = useState([]);
  useEffect(() => {
    // getting board new state evry  15sec
    setTimeout(() => {
      GetBoards()
        .then((res) => {
          console.log("resssssss", res);
          setboardsList(res);
        })
        .catch((err) => {
          console.log("errorrr", err);
        });
    }, 15000);
  });
  useEffect(() => {
    GetBoards()
      .then((res) => {
        console.log("resssssss", res);
        setboardsList(res);
      })
      .catch((err) => {
        console.log("errorrr", err);
      });
  }, []);
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
                {boardsList.map((board, index) => {
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
