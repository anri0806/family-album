import "../App.css";
import { useEffect, useState } from "react";

import Login from "./Login";
import HomeContainer from "./HomeContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  ///////////// keep user logged in /////////////

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  ///////////// log out /////////////

  function handleLogout() {
    setCurrentUser(null);
  }

  ///////////////////////////////////////////////

  return (
    <div className="App">
      {currentUser ? (
        <HomeContainer currentUser={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
