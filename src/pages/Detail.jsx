import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Nav, InputGroup, Form, Card, Button} from "react-bootstrap";
import { useCart } from '../storecopy.jsx';
import { useLike } from './../hooks/useLike.jsx';


function Detail (props) {

    let{id} = useParams();
    let navigate = useNavigate();
    let [숫자값, 숫자값변경] = useState(0);
    let url = "https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"
    let shoe = props.shoes.find((a) => a.id == id)
    let [tab,setTab] = useState(0);
    let [cn, setCn] = useState('');
    const { addItem } = useCart();

    let [like, addLike] = useLike();
    //let username = useName();
    

    useEffect(()=>{
        let 꺼낸거 = JSON.parse(localStorage.getItem('watched')) // 기본값 설정
        if (!꺼낸거.includes(shoe.id)) { // 중복 방지
            꺼낸거.push(shoe.id);
            localStorage.setItem('watched', JSON.stringify(꺼낸거));
        }

    }, []);

    useEffect(()=>{
        let a = setTimeout(()=>{ setCn('end') } , 100)
        return() => {
            clearTimeout(a)
            setCn('')
        }
    }, [shoe])

   function movePage(){
        const result = window.confirm(숫자값 + "개를 장바구니에 추가하시겠습니까?");
        if (result) {
            addItem( {id : shoe.id, name : shoe.title, count : 숫자값, price : shoe.price} )
            navigate('/cart')
        } else {
            null
        }
   }

    return( 
        <>
            <div className={"container start " + cn}> {/*스타일 여러개달수 있음*/}
                <div className="row">
                    <div className="col-md-6">
                    <img src={url} width="100%" />
                    </div>
                    <div className="col">
                    {isNaN(숫자값) ? <Numwarning/> : null}
                    <InputGroup size="lg"style={{marginTop : '20px'}}>
                        <InputGroup.Text id="inputGroup-sizing-lg">수량</InputGroup.Text>
                        <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm"  onChange={(e)=>숫자값변경(e.target.value)}/>
                    </InputGroup>   
                    {like} <span onClick={()=>{ addLike() }}>❤</span>
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}원</p>
                    <button className="btn btn-danger" style={{marginBottom : '20px'}} onClick={()=>{
                        movePage()
                    }} >장바구니 추가</button> 
                    </div>
                </div>
            </div>
            <Nav fill variant="tabs" defaultActiveKey=''>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={()=>{setTab(3)}}>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" onClick={()=>{setTab(4)}}>anything</Nav.Link>
                </Nav.Item>
            </Nav>
            {
                tab == 0 ? null : <TabContent tab={tab}/>
            }
            {/* <TabContent2 tab={tab}/> */}
        </>
    )
}

function TabContent(props) {
    return(
        <div>
        <Card>
            <Card.Header>{props.tab}</Card.Header>
            <Card.Body>
                <Card.Title>타이틀입니다.</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

function Numwarning() {
    return(
        <div className="alert alert-warning" style={{background : 'red'}}>
            경고 : 숫자만 입력하세요
        </div>
    )
}

export default Detail;