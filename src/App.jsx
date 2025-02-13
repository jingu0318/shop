import { useState } from 'react'
import './App.css'
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import data from './datas/data'
import Detail from './pages/Detail'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='title'>
        <Container>
          <Navbar.Brand href="#home">HaloSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/" className="link">홈</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/detail" className="link">상세페이지</Link></Nav.Link>
            <Nav.Link href="#pricing">reshows</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path="/" element={ 
          <>
            <div className="main-bg"></div>
            <div>
            <Container>
              <Row>
                <Item shoes={shoes}></Item>
              </Row>
            </Container>
            </div>
          </> } />

        <Route path="/detail" element={ <Detail/> } />
        
      </Routes>
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
