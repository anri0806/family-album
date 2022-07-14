function Picture({ pic, onDelete, onClickClose}) {

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
    </>
  );
}

export default Picture;
