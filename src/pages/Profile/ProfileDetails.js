import React from "react";
import { Card, Col, Media, Row } from "react-bootstrap";

const ProfileDetails = (props) => {
    console.log("propssss", props);
    if (props.location.state === undefined) {
        window.location.replace('/error')
    }
    const { name, img_url, email, kind } = props.location.state.profile
    return (
        <div>
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title"> {kind === "TEACHER" ? "Teacher" : "Student"} Details </h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href={kind === "TEACHER" ? "/teachers" : "/students"}> {kind === "TEACHER" ? "Teacher" : "Student"} </a>
                            </li>
                            <li className="breadcrumb-item active"> {kind === "TEACHER" ? "Teacher" : "Student"} Details </li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={12}>
                            <div className="about-info">
                                <h4> About {name} </h4>
                                <br></br>
                                <Media className="me-3 d-flex" style={{ "justifyContent": "space-around", "alignItems": "center" }}>
                                    <img src={img_url} style={{ "borderRadius": "50% 50%" }} alt="user Image" />
                                    <br></br>
                                    <Media.Body>
                                        <ul>
                                            <li>
                                                <span className="title-span"> Full Name: </span>
                                                <span className="info-span">{name} </span>
                                            </li>
                                            <li>
                                                <span className="title-span"> Email: </span>
                                                <span className="info-span"> {email} </span>
                                            </li>
                                            <li>
                                                <span className="title-span"> Kind : </span>
                                                <span className="info-span"> {kind}</span>
                                            </li>

                                        </ul>
                                    </Media.Body>
                                </Media>
                            </div>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </div>
    );
};

export { ProfileDetails };

