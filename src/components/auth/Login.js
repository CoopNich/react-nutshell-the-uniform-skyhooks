import React, { useState } from "react"
import UserManager from "../../modules/UserManager"
import { Form, Button, Card } from "react-bootstrap"
import "./Login.css"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "",});

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    UserManager.getUser(credentials.email)
    .then(result => {
      if (result.length === 0) {
        window.alert("Please enter a valid email")
      } else {
    props.setUser(result[0].id)
    props.history.push("/news");
  }})}

  return (
    <Form onSubmit={handleLogin}  className="login_form">
        <Form.Label>Please sign in</Form.Label>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
        </div>
        <Button className="btn" bg="dark" variant="dark" type="submit">Sign in</Button>
        <Button className="btn" type="button" bg="dark" variant="dark"
          onClick={() => props.history.push(`/register`)}>
          Register
        </Button>
    </Form>
  );
};


export default Login;