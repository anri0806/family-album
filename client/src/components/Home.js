import PictureContainer from "./PictureContainer";

function Home({ currentUser, pictures, onDelete }) {



  return (
    <>
      <br />
      <PictureContainer
        pics={pictures}
        currentUser={currentUser}
        onDelete={onDelete}
      />
    </>
  );
}

export default Home;
