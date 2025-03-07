import { lazy, useEffect, useState } from 'react'
import './App.css'
import data from './datas/data'
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios'
import Login from './pages/Login'

const Detail = lazy( () => import('./pages/Detail') )
const Cart = lazy( () => import('./pages/Cart') )

function App() {

  useEffect(() => {
    if (!localStorage.getItem('watched')) { // 데이터가 없을 때 초기화(새로고침해도 유지)
        localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='title'>
        <Container>
          <Navbar.Brand onClick={() => { navigate('/')}}>HaloSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/login')}}>로그인</Nav.Link>
            <Nav.Link  onClick={() => { navigate('/detail/0')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event')}}>이벤트</Nav.Link>
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

        <Route path="/login" element={<Login/>} />
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />
        <Route path="/cart" element={<Cart/>} />

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
      <Button onClick={() => { navigate('/event/one')}} >이벤트1</Button>
      <Button onClick={() => { navigate('/event/two')}}>이벤트2</Button>
      <Outlet></Outlet>
    </div>
  )
}

export default App
