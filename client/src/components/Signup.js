import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [relationship, setRelationship] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);


  ///////////// post new user info /////////////

  function handleSignup(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        relationship,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  ///////////////////////////////////////////////

  return (
    <>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" >
          <Form.Label className="label">Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label className="label">Relationship to child</Form.Label>
          <Form.Select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            name="relationship"
          >
            <option>Mother</option>
            <option>Father</option>
            <option>Grandmother</option>
            <option>Grandfather</option>
            <option>Aunt</option>
            <option>Uncle</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label className="label">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Enter Password"
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Signup
        </Button>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </Form>
    </>
  );
}

export default Signup;
