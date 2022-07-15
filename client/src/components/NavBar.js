import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="navBar-title" href="#home">
          Family Album
        </Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Add Photo</Nav.Link>
        <Nav.Link onClick={handleLogout} href="#logout">
          Logout
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
