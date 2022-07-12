import { useState } from "react";
import PictureComment from "./PictureComment";

function PictureCard({ pic, onDelete, onClickComment, comments }) {
  const [imageClicked, setImageClicked] = useState(false);

  function handleClick() {
    setImageClicked((imageClicked) => !imageClicked);

    onClickComment(pic);
  }

  function handleClosePopUp() {
    setImageClicked(false);
  }

  return (
    <>
      {imageClicked ? (
        <PictureComment
          pic={pic}
          comments={comments}
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
