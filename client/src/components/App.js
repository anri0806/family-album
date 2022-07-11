import "../App.css";
import { useEffect, useState } from "react";
import Login from "./Login";
import AlbumPage from "./AlbumPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // console.log(currentUser)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  function handleLogout() {
    setCurrentUser(null);
  }

  return (
    <div className="App">
      {currentUser ? (
        <AlbumPage currentUser={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
