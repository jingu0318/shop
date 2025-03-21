import { lazy, useEffect, useState } from 'react'
import './App.css'
import data from './datas/data'
import {Button, Container, Nav, Navbar, Row, Col, Card} from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useStore } from './storecopy.jsx'

const Detail = lazy( () => import('./pages/Detail') )
const Cart = lazy( () => import('./pages/Cart') )

function App() {

  useEffect(() => {
    if (!localStorage.getItem('watched')) { // 데이터가 없을 때 초기화(새로고침해도 유지)
        localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  const { isLoggedIn, user, setIsLoggedIn, setUser } = useStore();

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='title'>
        <Container>
          <Navbar.Brand onClick={() => { navigate('/')}}>HaloSHOP</Navbar.Brand>
          <Nav className="me-auto">
            {isLoggedIn ? <Nav.Link>안녕하세요 {user}님</Nav.Link> : <Nav.Link onClick={() => { navigate('/login')}}>로그인</Nav.Link>}
            <Nav.Link onClick={() => { navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event')}}>이벤트</Nav.Link>
            {isLoggedIn ? <Nav.Link onClick={() => { setIsLoggedIn(false) }} >로그아웃</Nav.Link> : null}
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
            <Button onClick={()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }) }}>맨 위로 가기</Button>
          </>
        } />

        <Route path="/login" element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />
        <Route path="/cart" element={<Cart/>} />

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>10% 할인 쿠폰이 지급되었습니다.</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰이 지급되었습니다.</div>}/>
        </Route>
      
        <Route path="*" element={ <div>없는 페이지입니다.</div> } />
      </Routes>
    </div>
  )
}

function Item(props) {

  let navigate = useNavigate();

  return(
    props.shoes.map((a,i) => {

      let url = "https://codingapple1.github.io/shop/shoes"+(i+1)+".jpg"
    
      return(
        <Col className='col'xs={4}>
          <img src={url} width="80%" style={{ cursor: "pointer" }} onClick={() => navigate(`/detail/${i}`)} />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}</p>
        </Col>
      )
    })     
  )
}

function Event(){
  let navigate = useNavigate();

  return(
    <div className='event'>
      <h4>오늘의 이벤트</h4>
      <br/>
      <Card border="primary" style={{ width: '18rem' }} onClick={() => { navigate('/event/one')}} >
        <Card.Header>이벤트1</Card.Header>
        <Card.Body>
          <Card.Text>
          첫 주문시 10% 할인 쿠폰
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <Card border="primary" style={{ width: '18rem' }} onClick={() => { navigate('/event/two')}} >
        <Card.Header>이벤트2</Card.Header>
        <Card.Body>
          <Card.Text>
          이번 달 생일자 쿠폰받기
          </Card.Text>
        </Card.Body>
      </Card>
      <Outlet></Outlet>
    </div>
  )
}

export default App
