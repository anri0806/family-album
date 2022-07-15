import { useState } from "react";
import Signup from "./Signup";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [signupToggle, setSignupToggle] = useState(false);
  const [error, setError] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => {
          onLogin(currentUser);
        });
      } else {
        res.json().then((err) => setError(err.error));
      }
    });
  }

  function handleClick() {
    setSignupToggle((signupToggle) => !signupToggle);
  }

  return (
    <div>
      <div className="titles">
        <h1>
          <b>Family Album</b>
        </h1>
        <p>
          Share your children's photos with your family privately whenever you
          want!
        </p>
      </div>
      <div className="login">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="label">Username</Form.Label>
            <Form.Control
              type="text"
              value={formData.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Enter Password"
            />
          </Form.Group>

          <Button variant="light" type="submit">
            Login
          </Button>
          {error ? (
            <>
              {" "}
              <p>{error}</p>
            </>
          ) : null}
        </Form>
        <br />
        <p>Don't have an account?</p>
        {signupToggle ? (
          <Signup onLogin={onLogin} />
        ) : (
          <Button variant="light" onClick={handleClick}>
            Create new account
          </Button>
        )}
      </div>
    </div>
  );
}

export default Login;
