import { useState } from "react";
import Signup from "./Signup";

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
          value={formData.username}
          onChange={handleChange}
          name="username"
          placeholder="Enter Username"
        />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter Password"
        />
        <button type="submit">Login</button>
        {error ? (
          <>
            {" "}
            <p>{error}</p>
          </>
        ) : null}
      </form>
      <h3>Don't have an account?</h3>
      {signupToggle ? (
        <Signup onLogin={onLogin} />
      ) : (
        <button onClick={handleClick}>Create new account</button>
      )}
    </>
  );
}

export default Login;
