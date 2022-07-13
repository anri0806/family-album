import { useEffect, useState } from "react";
import Comment from "./Comment";

function Picture({ pic, onDelete, onClickClose, currentUser }) {
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

  function handleRenderNewComment(newComments) {
    setComments([...comments, newComments]);
  }

  function handleDeleteComment(deletedItem) {
    const updatedComments = comments.filter((com) => com.id !== deletedItem.id);
    setComments(updatedComments);
  }

  function handleDeletePic() {
    fetch(`/pictures/${pic.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDelete(pic);
      }
    });
  }

  function handleClick() {
    onClickClose();
  }

  return (
    <>
      <button onClick={handleClick}>X</button>
      <img src={pic.image} alt="family" width="50%" />
      <button onClick={handleDeletePic}>Delete</button>
      <p>{pic.created_at.slice(0, 10)}</p>
      {/* Added who posted (when i post, its not associated yet) */}
      {/* <p>Posted by {pic.user.username}</p> */}
      <p>"{pic.caption}"</p>
      <Comment
        comments={comments}
        pic={pic}
        currentUser={currentUser}
        onSubmit={handleRenderNewComment}
        onDelete={handleDeleteComment}
      />
    </>
  );
}

export default Picture;
