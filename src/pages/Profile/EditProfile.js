import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { MEDIA_URL } from "../../env";
import { UpdateElabUser } from "../../_services/app-services";
let initialValues, storage;
const EditProfile = (props) => {
    const [user, setuser] = useState(null)
    if (props.location.state === undefined) {
        window.location.replace('/profile')
    }

    useEffect(() => {
        if (localStorage.getItem("login")) {
            storage = localStorage.getItem("login");
            let user = JSON.parse(storage || JSON.stringify({}));
            setuser(user)
        }
    }, [])
    const { last_name, first_name, email, kind } = props.location.state

    const [Loading, setLoading] = useState(false);
    const [FirstNameError, setFirstNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [updateError, setupdateError] = useState(false);

    initialValues = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        photo: null
    };
    const [form, setForm] = useState(initialValues);
    const handelSubmit = async (e) => {
        e.preventDefault();

        setupdateError('')
        setLoading(true);
        const _form = new FormData();
        _form.append('first_name', form.first_name);
        _form.append('last_name', form.last_name);
        _form.append('email', form.email);
        
        if (form.photo) {
            _form.append('photo', form.photo);
        }
        console.log("form",_form);
        UpdateElabUser(_form).then((res) => {
            // TODO update local Storage ->DONE 
            localStorage.setItem(
                "login",
                JSON.stringify({
                    token: user.token,
                    user: {
                        photo: res.data.photo ? MEDIA_URL + res.data.photo : "assets/img/user.png",
                        first_name: res.data.first_name,
                        last_name: res.data.last_name,
                        email: res.data.email,
                        user: res.data.user,
                        kind: res.data.kind,
                    },
                })
            );

            setLoading(false)
            setupdateError('Elab user updated successfully')
            setTimeout(() => {
                window.location.replace('/profile')
            }, 200);
        }).catch((err) => {
            console.log("error", err);
            setLoading(false)
            setupdateError(err)
        })
    }
    return (
        <div>
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title"> Edit Profile </h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/profile"> Profile</a>
                            </li>
                            <li className="breadcrumb-item active">Edit Profile </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={(e) => {
                                handelSubmit(e)
                            }}>
                                <Row>
                                    <Col sm={12}>
                                        <h5 className="form-title">
                                            <span> {kind} Information </span>
                                        </h5>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label> First Name </Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue={first_name}
                                                onChange={(e) => {
                                                    setForm((form) => ({ ...form, first_name: e.target.value }));
                                                    if (e.target.value === "") {
                                                        setFirstNameError("first name is required");
                                                    } else {
                                                        setFirstNameError("");
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    if (e.target.value === "") {
                                                        setFirstNameError("first name is required");
                                                    } else {
                                                        setFirstNameError("");
                                                    }
                                                }}
                                                placeholder="first name"
                                                required={true}

                                            />
                                        </Form.Group>
                                        <div style={{ textAlign: "center" }}>
                                            {FirstNameError !== "" ? (
                                                <small
                                                    style={{
                                                        color: "red",
                                                        fontWeight: "revert",
                                                        display: "contents",
                                                    }}
                                                >
                                                    {FirstNameError}
                                                </small>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label> Last Name </Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue={last_name}
                                                placeholder="last name"
                                                onChange={(e) => {
                                                    setForm((form) => ({ ...form, last_name: e.target.value }));
                                                    if (e.target.value === "") {
                                                        setLastNameError("last name is required");
                                                    } else {
                                                        setLastNameError("");
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    if (e.target.value === "") {
                                                        setLastNameError("last name is required");
                                                    } else {
                                                        setLastNameError("");
                                                    }
                                                }}
                                                required={true}
                                            />
                                        </Form.Group>
                                        <div style={{ textAlign: "center" }}>
                                            {LastNameError !== "" ? (
                                                <small
                                                    style={{
                                                        color: "red",
                                                        fontWeight: "revert",
                                                        display: "contents",
                                                    }}
                                                >
                                                    {LastNameError}
                                                </small>
                                            ) : null}
                                        </div>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label> Email </Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="new email"
                                                defaultValue={email}
                                                onChange={(e) => {
                                                    setForm((form) => ({ ...form, email: e.target.value }));
                                                    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                                                    if (!reg.test(e.target.value)) {
                                                        setemailError("enter a valid email address");
                                                    } else {
                                                        setemailError("");
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                                                    if (e.target.value === "") {
                                                        setemailError("Email address required");
                                                    } else if (!reg.test(e.target.value)) {
                                                        setemailError("Enter a valid email address");
                                                    } else {
                                                        setemailError("");
                                                    }
                                                }}
                                                required={true}
                                            />
                                        </Form.Group>
                                        <div style={{ textAlign: "center" }}>
                                            {emailError !== "" ? (
                                                <small
                                                    style={{
                                                        color: "red",
                                                        fontWeight: "revert",
                                                        display: "contents",
                                                    }}
                                                >
                                                    {emailError}
                                                </small>
                                            ) : null}
                                        </div>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group>
                                            <Form.Label> Image </Form.Label>
                                            <Form.File
                                                className="form-control"
                                                accept=".png,.jpeg,.jpg"
                                                onChange={(e) => {
                                                    setForm((form) => ({ ...form, photo: e.target.files[0] }));
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <div style={{ textAlign: "center" }}>
                                            {updateError !== "" ? (
                                                <p
                                                    style={{
                                                        color: "red",
                                                        fontWeight: "revert",
                                                        display: "contents",
                                                    }}
                                                >
                                                    {updateError}
                                                </p>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col xs={12} style={
                                        {
                                            display: "flex",
                                            justifyContent: "end"
                                        }
                                    }>

                                        <Button variant="info" type="submit" disabled={
                                            form.last_name === "" ||
                                            form.first_name === "" ||
                                            form.email === "" || emailError !== ""
                                        }>
                                            {Loading && (
                                                <span className="spinner-border spinner-border-sm mr-1"></span>
                                            )}
                                            &nbsp;  Update
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export { EditProfile };
