import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">EpiWeather</Navbar.Brand>
        <Navbar.Toggle aria-controls="EpiWeather" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">
              <Search />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
