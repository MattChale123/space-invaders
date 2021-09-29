import React, { useState } from 'react'
import { Form, Button, FloatingLabel, Row, Toast, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setUser } from "../redux/actions";
import { useHistory } from 'react-router'
import "./Login.css"

export default function Login() {
    const [ error, setError ] = useState('')
    const [ form, setForm ] = useState({
        username: '',
        password: ''
    });
    const [ showA, setShowA ] = useState(true);
    const [ registerForm, setRegisterForm ] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: form.username,
                password: form.password,
              }),
        })
        .then (res => res.json())
        .then(data => {
            console.log(data)
            if (data.error) {
                setError(data.error)
            } else {
                dispatch(setUser(data))
                history.push('/home')
            }
        })
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const toggleShowA = () => setShowA(!showA);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click to Login
        </Tooltip>
      );

    const handleRegisterSubmit = e => {
        e.preventDefault()
        fetch('/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: registerForm.username,
                password: registerForm.password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                history.push('/home')
            }
        })
    }

    const handleRegisterChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }
    
    const errorStyling = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <div>
            
            <br />
            <h1>Welcome to Space Invaders!</h1>
            <>
            <br />
            <Row className="register-toggle">
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowA} className="mb-2a" style={{color: "black"}}>
                        Register in to play!
                    </Button>
                    <Toast className="toast-box" show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Space Invaders</strong>
                            {/* <small>11 mins ago</small> */}
                        </Toast.Header>
                        <Toast.Body>
                            <Form onSubmit={handleRegisterSubmit}>
                                <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                            <Form.Control type="text" placeholder="Username" onChange={handleRegisterChange} value={registerForm.username} name='username' />
                                </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" onChange={handleRegisterChange} value={registerForm.password} name='password' />
                            </FloatingLabel>
                            <br />
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button className='submitButton' variant="success" type="submit" style={{color: "black"}}>
                                    Register!
                                </Button>
                                </OverlayTrigger>
                                {(error === 'Username already in use. Pick another' || 'Please include a username and password') && <p style={errorStyling}>{error}</p>}
                            </ Form>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>            
            <br />
            <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Username" onChange={handleChange} value={form.username} name='username' />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} value={form.password} name='password' />
                </FloatingLabel>
                <br />
                <Button className="mb-2a" variant="primary" type="submit" style={{color: "black"}}>
                    Submit
                </Button>
                {(error === 'password is incorrect' || 'No username with that username. Please register account.') && <p style={errorStyling}>{error}</p>}
            </Form>
            </div>
            </>
        </div>
    )
    // ES7 React/Redux/GraphQL/React-Native ssnippets
}

