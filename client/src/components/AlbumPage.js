import NavBar from "./NavBar";
import PictureContainer from "./PictureContainer"

function AlbumPage({ onLogout }) {
  return (
    <>
      <NavBar onLogout={onLogout} />
      <p>this is album page</p>
      <PictureContainer />
    </>
  );
}

export default AlbumPage;
