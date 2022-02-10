import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Navigasi() {
  return (
    <Navbar style={{ backgroundColor: "#353a40" }} variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Berita">Berita</Nav.Link>
            <Nav.Link href="#Live">Live</Nav.Link>
            <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Lorem Ipsum</NavDropdown.Item>
              <NavDropdown.Item href="#">Lorem Ipsum</NavDropdown.Item>
              <NavDropdown.Item href="#">Lorem Ipsum</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Lorem Ipsum</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#transfer-pemain">Transfer Pemain</Nav.Link>
            <Nav.Link href="#tim">Tim</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
