import { useState } from "react";
import Picture from "./Picture";

function PictureCard({ pic, onDelete, currentUser }) {
  const [imageClicked, setImageClicked] = useState(false);

  function handleClick() {
    setImageClicked((imageClicked) => !imageClicked);
  }

  function handleClosePopUp() {
    setImageClicked(false);
  }

  return (
    <>
      {imageClicked ? (
        <Picture
          pic={pic}
          currentUser={currentUser}
          onDelete={onDelete}
          onClickClose={handleClosePopUp}
        />
      ) : (
        <img onClick={handleClick} src={pic.image} alt="family" width="35%" />
      )}
    </>
  );
}

export default PictureCard;
