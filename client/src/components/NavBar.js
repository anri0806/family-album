import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navBar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="currentColor"
        className="bi bi-camera-fill"
        viewBox="0 0 16 16"
      >
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
      </svg>
      <Navbar.Brand className="navBar-title" href="/">
        Family Album
      </Navbar.Brand>
      <Nav.Link href="/" className="navBar-link" id="home">
        Home
      </Nav.Link>
      <Nav.Link href="/form" className="navBar-link">
        Add Photo
      </Nav.Link>
      <Nav.Link href="/aboutme" className="navBar-link">
        About Me
      </Nav.Link>
      <Nav.Link onClick={handleLogout} href="/" className="navBar-link">
        Logout
      </Nav.Link>
    </Navbar>
  );
}

export default NavBar;
