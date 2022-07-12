function PictureComment({ pic, onDelete, comments, onClickClose }) {
  function handleDelete() {
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

  const userComments = comments.map((com) => (
    <p key={com.id}>Comments: {com.content}</p>
  ));

  return (
    <>
      <button onClick={handleClick}>X</button>
      <img src={pic.image} alt="family" width="50%" />
      <button onClick={handleDelete}>Delete</button>
      <p>{pic.created_at.slice(0, 10)}</p>
      {/* Added who posted */}
      {/* <p>Posted by {pic.user.username}</p> */}
      <p>"{pic.caption}"</p>
      {userComments}
    </>
  );
}

export default PictureComment;
