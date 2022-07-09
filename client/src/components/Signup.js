import { useState } from "react";

//// Make this component popup & add x button ///

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [relationship, setRelationship] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

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

  return (
    <>
      <form onSubmit={handleSignup}>
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Enter Username"
        />
        <label>
          <b>Relationship to child</b>
        </label>
        <select
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
        </select>
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Enter Password"
        />
        <label>
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="submit">Signup</button>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </form>
    </>
  );
}

export default Signup;
