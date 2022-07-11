function Picture({ pic, onDelete }) {
  function handleDelete() {

    fetch(`/pictures/${pic.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDelete(pic)
        }
      })
      
  }

  return (
    <>
      <img src={pic.image} alt="family" width="50%" />
      <button onClick={handleDelete}>Delete</button>
      <p>{pic.created_at.slice(0, 10)}</p>
      {/* Added who posted when user clicked on picture */}
      {/* <p>Posted by {pic.user.username}</p> */}
      <p>"{pic.caption}"</p>
    </>
  );
}

export default Picture;
