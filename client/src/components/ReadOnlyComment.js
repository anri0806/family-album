import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

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
      <br/>
      <Card className="comment-card" bg="light" border="light">
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
            <Card.Body style={{ padding: "10px 10px 0 10px" }}>
              <b>{com.user.username}</b>
              <br />
              {com.content}
              <br />
              <span style={{ fontSize: "10px" }}>
                {com.updated_at.slice(0, 10)}
              </span>
              {/* <Card.Title>{com.user.username}</Card.Title>
              <Card.Text>{com.content}</Card.Text>
              <Card.Text>{com.updated_at.slice(0, 10)}</Card.Text> */}
            </Card.Body>
            {currentUser.id === com.user_id ? (
              <div className="comment-edit-delete-btn">
                <svg
                  onClick={() => handleClickEdit(com)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>{" "}
                <svg
                  onClick={() => handleDelete(com)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </div>
            ) : null}
          </>
        )}
      </Card>
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
        res.json().then((newComment) => {
          // console.log(newComment);
          onSubmitAdd(newComment);
        });
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
    <div className="comment-detail-compo">
      {userComments}
      <br />
      <Form onSubmit={handleSubmit} className="add-comment-form">
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Control
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            name="content"
            placeholder="Write a comment"
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Add Comment
        </Button>
      </Form>
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default ReadOnlyComment;
