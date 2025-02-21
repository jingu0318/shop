import { useState } from 'react'
import './App.css'
import data from './datas/data'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios'

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='title'>
        <Container>
          <Navbar.Brand onClick={() => { navigate('/')}}>HaloSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>홈</Nav.Link>
            <Nav.Link  onClick={() => { navigate('/detail/0')}}>상세페이지</Nav.Link>
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
            <Button onClick={()=>{
              setCount(count+1)
              console.log(count)
              axios.get('https://codingapple1.github.io/shop/data'+(count+2)+'.json')
              .then((result)=>{ 
                let copy = [...shoes]
                copy.push(...result.data)
                setShoes(copy)
               })
              .catch(()=>{
                console.log('불러오기 실패')
              })
            }}>버튼</Button>
          </>
        } />

        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />
        <Route path="/cart" element={<Cart/>} />

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버정보임</div>}/>
        </Route>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
      
        <Route path="*" element={ <div>없는 페이지입니다.</div> } />
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

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event(){
  return(
    <div className='event'>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App
