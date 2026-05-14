import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Orchid from './components/Orchids';
import BannerCarousel from './components/Carousel';
import { orchids } from './data/orchidsData';
import { banners } from './data/banner';

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand href="#home">Single Page Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mb-4">
        <BannerCarousel imageFiles={banners} />
      </Container>

      <Container>
        <Row className="g-4">
          {orchids.map((flower) => (
            <Col key={flower.id} xs={12} sm={6} md={4} lg={3}>
              <Orchid flower={flower} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default App;
