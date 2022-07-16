import { useState, useEffect } from "react";
import Picture from "./Picture";
import ReadOnlyComment from "./ReadOnlyComment";

function PictureCard({ pic, onDelete, currentUser }) {
  const [imageClicked, setImageClicked] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/comments")
      .then((res) => res.json())
      .then((comments) => {
        const filteredComment = comments.filter(
          (com) => com.picture_id === pic.id
        );
        setComments(filteredComment);
      });
  }, [pic.id]);

  function handleRenderNewComment(newItems) {
    setComments([...comments, newItems]);
  }

  function handleRenderUpdatedComment(updatedItem) {
    const updatedComments = comments.map((com) =>
      com.id === updatedItem.id ? updatedItem : com
    );
    setComments(updatedComments);
  }

  function handleDeleteComment(deletedItem) {
    const updatedComments = comments.filter((com) => com.id !== deletedItem.id);
    setComments(updatedComments);
  }

  function handleClick() {
    setImageClicked((imageClicked) => !imageClicked);
  }

  function handleClosePopUp() {
    setImageClicked(false);
  }

  return (
    <>
      {imageClicked ? (
        <>
          <Picture
            pic={pic}
            currentUser={currentUser}
            onDelete={onDelete}
            onClickClose={handleClosePopUp}
          />

          <ReadOnlyComment
            comments={comments}
            pic={pic}
            currentUser={currentUser}
            onSubmitAdd={handleRenderNewComment}
            onDelete={handleDeleteComment}
            onEdit={handleRenderUpdatedComment}
          />
        </>
      ) : (
        <img onClick={handleClick} src={pic.image} alt="family" />
      )}
    </>
  );
}

export default PictureCard;
