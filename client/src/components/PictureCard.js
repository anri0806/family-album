import { useState, useEffect } from "react";
import Picture from "./Picture";
import ReadOnlyComment from "./ReadOnlyComment";

function PictureCard({ pic, onDelete, currentUser }) {
  const [imageClicked, setImageClicked] = useState(false);
  const [comments, setComments] = useState([]);

  ///////////// save clicked photo's comments data /////////////

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

  ///////////////////////////////////////////////

  function handleDeletePic() {
    fetch(`/pictures/${pic.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDelete(pic);
      }
    });
  }


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
        <div className="popup-box">
          <svg
            id="close-btn"
            onClick={handleClosePopUp}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
          <div className="box">
            <div className="components">
              <Picture
                pic={pic}
                currentUser={currentUser}
                onDelete={onDelete}
              />

              <ReadOnlyComment
                comments={comments}
                pic={pic}
                currentUser={currentUser}
                onSubmitAdd={handleRenderNewComment}
                onDelete={handleDeleteComment}
                onEdit={handleRenderUpdatedComment}
              />
              {currentUser.id === pic.user_id ? (
                <div onClick={handleDeletePic} className="delete-image-btn-container">
                  <p>delete this photo</p>
                  <svg
                    id="delete-image-btn"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      <li>
        <img onClick={handleClick} src={pic.image} alt="family" />
      </li>
    </>
  );
}

export default PictureCard;
