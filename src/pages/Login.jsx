import { useNavigate } from "react-router-dom";
import {Card, Form, Button} from 'react-bootstrap'
import { useState } from "react";
import { useStore } from '../storecopy';

function Login() {

    let navigate = useNavigate();

    const { setIsLoggedIn, setUser } = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // localStorage에서 사용자 데이터 가져오기
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        // 입력된 이메일과 비밀번호가 저장된 데이터와 일치하는지 확인
        if (storedUserData && storedUserData.email === email && storedUserData.password === password) { //storedUserData를 사용할 때 null이나 undefined일 수 있기 때문에, 안전하게 접근하기 위한 조건
            setIsLoggedIn(true);
            setUser(storedUserData.username);
            console.log('로그인 성공!');
            setError('');
            navigate('/')
        } else {
            setError('이메일 또는 비밀번호가 잘못되었습니다.');
        }
    };

    return(
        <div>
        <Card className="bg-light border-primary text-black" style={{ margin : '30px'}}>
            <Card.Header>로그인</Card.Header>
            <Card.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Form.Group>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button variant="primary" type="submit">
                        로그인
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        
        <p onClick={() => { navigate('/Signup')}} style={{marginLeft: '35px'}}>회원가입하기</p>
        </div>
    )
}

export default Login