import { useState } from "react";
import Signup from "./Signup";

function LoginHome({setCurrentUser}) {
  const [username, setUsername] = useState("");
  const [signupToggle, setSignupToggle] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((user) => console.log(user));
    //START FROM HERE - render album page after login
  }

  function handleClick() {
    setSignupToggle((signupToggle) => !signupToggle);
  }

  return (
    <>
      <h1>Share your children's photos with your family whenever you want!</h1>
      <br />
      <h3>Please login</h3>
      <form onSubmit={handleLogin}>
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
          <b>Password</b>
        </label>
        <input type="password" name="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
      <h3>Don't have an account?</h3>
      {signupToggle ? (
        <Signup setCurrentUser={setCurrentUser} />
      ) : (
        <button onClick={handleClick}>Create new account</button>
      )}
    </>
  );
}

export default LoginHome;
