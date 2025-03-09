import { useState } from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Signup() {

    let navigate = useNavigate();
    // 상태 변수들 정의
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [terms, setTerms] = useState(false);

    // 폼 제출 시 실행할 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
        const formData = {
            email,
            password,
            username,
            terms
        };
        localStorage.setItem('userData', JSON.stringify(formData)); //로컬스토리지에 저장

        alert('회원가입이 완료되었습니다!');
        navigate('/login')
    };

    return(
        <div>
            <h3 className="title">회원가입</h3>
            <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}> {/* submit 버튼 누를시 함수 실행 */}
                    {/* 이메일 입력 필드 */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // 입력값 업데이트
                        />
                    </Form.Group>

                    {/* 비밀번호 입력 필드 */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} // 입력값 업데이트
                        />
                    </Form.Group>

                    {/* 사용자이름 입력 필드 */}
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>사용자이름</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="유저명" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} // 입력값 업데이트
                        />
                    </Form.Group>

                    {/* 약관 동의 체크박스 */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            label="약관에 동의" 
                            checked={terms} 
                            onChange={(e) => setTerms(e.target.checked)} // 체크박스 상태 업데이트
                        />
                    </Form.Group>

                    {/* 제출 버튼 */}
                    <Button variant="primary" type="submit">
                        회원가입
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Signup