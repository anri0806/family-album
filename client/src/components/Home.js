import PictureContainer from "./PictureContainer";

function Home({ currentUser, pics, onDelete }) {


  return (
    <>
      <br />
      <PictureContainer
        pics={pics}
        currentUser={currentUser}
        onDelete={onDelete}
      />
    </>
  );
}

export default Home;
