import "../App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import PictureForm from "./PictureForm";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/pictures")
      .then((res) => res.json())
      .then((pics) => {
        setPictures(pics);
      });
  }, []);

  function handleLogout() {
    setCurrentUser(null);
  }

  function handlePostPicture(newPic) {
    setPictures([newPic, ...pictures]);
  }

  function handleDeletePicture(item) {
    const updatedPictures = pictures.filter((pic) => pic.id !== item.id);
    setPictures(updatedPictures);
  }

  const sortedPictures = [...pictures].sort((a, b) =>
    a.created_at > b.created_at ? -1 : 1
  );

  return (
    <div className="App">
      {currentUser ? (
        <>
          <NavBar onLogout={handleLogout} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentUser={currentUser}
                  pictures={sortedPictures}
                  onDelete={handleDeletePicture}
                />
              }
            />
            <Route
              path="/form"
              element={
                <PictureForm
                  currentUser={currentUser}
                  onSubmitAddPic={handlePostPicture}
                />
              }
            />
            <Route
              path="/aboutme"
              element={<AboutMe currentUser={currentUser} />}
            />
          </Routes>
        </>
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
