import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditComment({ com, comId, onEdit, handleHideEdit }) {
  const [updatedComment, setUpdatedComment] = useState(com.content);

  
  ///////////// edit comment /////////////

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
        handleHideEdit();
      });
  }

  ///////////////////////////////////////////////
  

  return (
    <Form onSubmit={handleSubmit} className="edit-comment-container"> 
      <Form.Group className="mb-3" controlId="formEditComment">
        <Form.Control
          value={updatedComment}
          onChange={(e) => setUpdatedComment(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Button variant="light" type="submit">
        Save
      </Button>
    </Form>
  );
}

export default EditComment;
