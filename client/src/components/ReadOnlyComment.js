import { useState } from "react";
import EditComment from "./EditComment";

function ReadOnlyComment({
  comments,
  pic,
  currentUser,
  onSubmitAdd,
  onDelete,
  onEdit,
}) {
  const [editCommentId, setEditCommentId] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    content: "",
    user_id: currentUser.id,
    picture_id: pic.id,
  });

  const userComments = comments.map((com) => (
    <div key={com.id}>
      {editCommentId === com.id ? (
        <EditComment
          key={com.key}
          com={com}
          comId={editCommentId}
          onEdit={onEdit}
          handleHideEdit={handleHideEdit}
        />
      ) : (
        <>
          {currentUser.id === com.user_id ? (
            <>
              <button onClick={() => handleClickEdit(com)}>edit</button>
              <button onClick={() => handleDelete(com)}>x</button>
            </>
          ) : null}

          <p>{com.content}</p>
          {/* Add who posted (when i post, its not associated yet) */}
          {/* <p>{com.user.username}</p> */}
          <p>{com.updated_at.slice(0, 10)}</p>
        </>
      )}
    </div>
  ));

  function handleHideEdit() {
    setEditCommentId(null);
  }

  function handleClickEdit(com) {
    setEditCommentId(com.id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newComment) => onSubmitAdd(newComment));
      } else {
        res.json().then((err) => setError(err.error));
      }
    });

    setFormData({
      content: "",
      user_id: currentUser.id,
      picture_id: pic.id,
    });
  }

  function handleDelete(com) {
    fetch(`/comments/${com.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDelete(com);
      }
    });
  }

  return (
    <>
      <h3>Comments:</h3>
      {userComments}
      <form onSubmit={handleSubmit}>
        <input
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          name="content"
          placeholder="Write a comment"
        />
        <button type="submit">Comment</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
}

export default ReadOnlyComment;
