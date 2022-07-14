import { useState } from "react";

function EditComment({ com, comId, onEdit, handleHideEdit }) {
  const [updatedComment, setUpdatedComment] = useState(com.content);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/comments/${comId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: updatedComment,
      }),
    })
      .then((res) => res.json())
      .then((updatedComment) => {
        onEdit(updatedComment);
        //hide edit
        handleHideEdit();
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={updatedComment}
        onChange={(e) => setUpdatedComment(e.target.value)}
        type="text"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditComment;
