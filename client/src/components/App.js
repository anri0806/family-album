import "../App.css";
import { useState } from "react";
import LoginHome from "./LoginHome";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  console.log(currentUser);

  function handleCurrentUser(userData) {
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <LoginHome setCurrentUser={handleCurrentUser} />
    </div>
  );
}

export default App;
