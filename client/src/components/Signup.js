import { useState } from "react";

//// Make this component popup & add x button ///

function Signup({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [relationship, setRelationship] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    //// FETCH FROM SIGNUP..??? ///
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        relationship,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((userInfo) => setCurrentUser(userInfo));
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
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          name="password"
          placeholder="Enter Password"
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default Signup;
