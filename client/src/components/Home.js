import { useState, useEffect } from "react";
import PictureContainer from "./PictureContainer";
import PictureForm from "./PictureForm";
import NavBar from "./NavBar";

function Home({ currentUser, onLogout }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/pictures")
      .then((res) => res.json())
      .then((pics) => setPictures(pics));
  }, []);

  function handlePostPicture(newPic) {
    setPictures([...pictures, newPic]);
  }

  function handleDeletePicture(item) {
    const updatedPictures = pictures.filter((pic) => pic.id !== item.id);
    setPictures(updatedPictures);
  }

  return (
    <>
      <NavBar onLogout={onLogout} />
      <PictureForm
        currentUser={currentUser}
        onSubmitAddPic={handlePostPicture}
      />
      <br />
      <PictureContainer
        pics={pictures}
        currentUser={currentUser}
        onDelete={handleDeletePicture}
      />
    </>
  );
}

export default Home;
