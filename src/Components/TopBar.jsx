import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="nav" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          AppMeteo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
