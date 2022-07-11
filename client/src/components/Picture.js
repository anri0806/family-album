

function Picture({ pic }) {

  console.log(pic)

  return (
    <>
      <img src={pic.image} alt="family" width="50%" />
      <p>{pic.created_at.slice(0,10)}</p>
      {/* Added who posted when user clicked on picture */}
      {/* <p>Posted by {pic.user.username}</p> */}
      <p>"{pic.caption}"</p>
    </>
  );
}

export default Picture;
