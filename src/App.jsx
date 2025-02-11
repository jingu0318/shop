import { useState } from 'react'
import './App.css'
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import data from './data'

function App() {

  let [shoes] = useState(data);

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
        <Item shoes={shoes}></Item>
      </Row>
    </Container>
    </div>

    </div>
  )
}

function Item(props) {
  return(
    props.shoes.map((a,i) => {

      let url = "https://codingapple1.github.io/shop/shoes"+(i+1)+".jpg"
    
      return(
        <Col className='col'>
          <img src={url} width="80%"></img>
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}</p>
        </Col>
      )
    })
  )
}

export default App
