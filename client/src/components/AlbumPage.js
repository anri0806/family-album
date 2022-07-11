import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import PictureContainer from "./PictureContainer";
import PictureForm from "./PictureForm";

function AlbumPage({ onLogout, currentUser }) {
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
      <p>this is album page</p>
      <PictureForm currentUser={currentUser} onSubmit={handlePostPicture} />
      <br />
      <PictureContainer pics={pictures} onDelete={handleDeletePicture} />
    </>
  );
}

export default AlbumPage;
