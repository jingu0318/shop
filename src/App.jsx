import './App.css'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'


function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
