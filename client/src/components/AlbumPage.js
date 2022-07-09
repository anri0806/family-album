import NavBar from "./NavBar";

function AlbumPage({ onLogout }) {
  return (
    <>
      <p>this is album page</p>
      <NavBar onLogout={onLogout} />
    </>
  );
}

export default AlbumPage;
