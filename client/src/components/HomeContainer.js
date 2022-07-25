import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home";
import PictureForm from "./PictureForm";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";

function HomeContainer({ currentUser, onLogout }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/pictures")
      .then((res) => res.json())
      .then((pics) => {
        setPictures(pics);
      });
  }, []);

  function handlePostPicture(newPic) {
    setPictures([newPic, ...pictures]);
  }

  function handleDeletePicture(item) {
    const updatedPictures = pictures.filter((pic) => pic.id !== item.id);
    setPictures(updatedPictures);
  }

  ///////////// sort data by date //////////////

  const sortedPictures = [...pictures].sort((a, b) =>
    a.created_at > b.created_at ? -1 : 1
  );

  ///////////////////////////////////////////////

  return (
    <>
      <NavBar onLogout={onLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentUser={currentUser}
              pics={sortedPictures}
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
  );
}

export default HomeContainer;
