import './App.css'
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='title'>
        <Container>
          <Navbar.Brand href="#home">HaloSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">clips</Nav.Link>
            <Nav.Link href="#pricing">reshows</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <div className="main-bg"></div>
    <div>
    <Container>
      <Row>
        <Col className='col'>
          <img></img>
          <h4>상품명1</h4>
          <p>상품설명</p>
        </Col>
        <Col>
          <img></img>
          <h4>상품명2</h4>
          <p>상품설명</p>
        </Col>
        <Col>
          <img></img>
          <h4>상품명3</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </Container>
    </div>

    </div>
  )
}

export default App
