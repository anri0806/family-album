import { useState } from "react";

function LoginHome() {
  const [username, setUsername] = useState("");

  return (
    <>
      <h1>Share your family's photos whenever you want!</h1>
      <br />
      <form>
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
      <button>Sign Up</button>
    </>
  );
}

export default LoginHome;
