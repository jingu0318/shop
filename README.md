# 쇼핑몰 사이트 만들기

## 1.새로운 리액트 프로젝트 생성
리액트 프로젝트 생성은 이제 쉽게 할거라 믿는다.  

### React-Bootstrap 라이브러리 설치
레이아웃을 복붙식으로 편하게 개발가능한 라이브러리이다.  
외부라이브러리 설치 방식은 똑같다. 구글에서 라이브러리docs 사이트에 들어가 설치 및 시작에 들어간다.   
알려주는 방법 그대로 설치를 진행하면 된다. 설치명령어는 언제든 바뀔 수 있어서 docs 들어가 직접확인 필요   
```bash
npm install react-bootstrap bootstrap
```
명령어 입력뿐만 아니라 css 파일 또는 index.html 파일에 선택해서 넣으라는 것을 집어넣어준다.  

### React-Bootstrap 사용법
부트스트랩 docs에서 버튼을 검색하고 import 및 원하는 버튼을 가져다가 복붙으로 사용   

---

## 2.이미지 넣는 법
return 안에  
```jsx
<div className="main-bg"></div>
```
div 하나 넣어주고  

```css
.main-bg{
    background-image: url(./assets/pic.png);
    /* height: 600px;
    background-size: cover;
    background-position: center; */
}
```
css 파일에서 background-image 에서 url 넣고 해상 사진의 위치를 넣으면 된다.   
html 안에 넣고 싶으면   
```jsx
import bg from './assets/pic.png';

<div className="main-bg" style={{backgroundimage : 'url('+ bg +')'}}></div>
```
import를 통해서 이미지 경로를 설정 한 변수를 style을 url안에 직접 넣는다.   

### 상품 레이아웃 만들기
레이아웃으로 가로로 3개 균등하게 나우기 위해선 bootstrap에 가서 columns 혹은 grids 검색하면 잘 나온다.  
가져와서 사용하고 column 테그 안에 각각 상품명과 이미지테그를 삽입해서 사용하면 된다.  
img 테그 안에 src ="" 를 이용해서 주소를 넣는데 html안에 넣는거니까 아까처럼 import해서 넣거나 외부호스팅된 이미지라면 그냥 이미지 절대주소를 넣으면 된다.  

### public 폴더
이미지를 쓸때마다 import하면 엄청 많은 import가 생기게 된다. 그걸 해결해주는것은 public 폴더이다.  
나중에 build 할때 src 폴더는 다 압축이 되지만 public 폴더는 압축이 되지 않는다.   
pulic 폴더 안에 이미지들을 사용할려면 /로 시작해서 이름만 잘 넣어주면 알아서 잘 가져와준다.   
형태보존하고 싶은 파일은 public 안에 넣으주면 된다. 이미지 txt json 등 수정이 필요없는 static 파일 같은 것   


나중에 배포할 때 jingu0318.com 경로에 배포하면 아무런 문제가 없지만  
jingu0318.com/어쩌구/ 경로에 배포하면 /logo192.png 이렇게 쓰면 파일을 찾을 수 없다고 나올 수도 있습니다.   

```jsx
<img src={process.env.PUBLIC_URL + '/publicimg.png'} /> 
```
public 폴더 이미지를 사용할 때 권장하는 방식이다.   
이렇게 사용하면 문제가 해결된다.  

---

## 3.코드 길어지면 import export문법
데이터를 저장하기 위한 jsx 파일을 하나 생성한다. <mark>길고 복잡한 state는 다른 파일로 빼는게 좋다.</mark>   
이 데이터를 이용하기 위해선 import,export가 필요하다.   
타 파일에 있는 변수를 사용하고 싶다면 다른 파일에 있는 변수를 export하고 App.jsx에서 import하면 끝   

```jsx
export default 변수명;
export {변수1, 변수2}; //여러개 변수 보내고 싶을 때

import 작명 from './파일경로이름'
import {변수1, 변수2} from './파일경로이름' //여러개받을때
```

### 길고 복잡한 state 데이터바인딩
복잡한 자료에서 데이터 뽑을 땐 시작기호만 잘 보면된다.   
시작기호가 [] 대괄호로 시작하면 array 자료이다. [0] 이렇게 뽑으면 된다.   
시작기호가 {} 중괄호로 시작하면 object 자료이다. .키명 이렇게 뽑으면 된다.   


### 축약하기

1. 상품목록 컴포넌트화 
2. 컴포넌트 안 데이터바인딩 
3. 반복적인 컴포넌트 map반복문 활용하여 하나로 축약 


### 기억할 부분
map() 함수는 혼자 사용이 안되고 앞에 배열과 함께만 사용이 가능하다. 배열갯수만큼 반복   
map() 안에 function(a,i) {} 말고 (a,i) => {} 로 축약가능   
map() 함수를 나는 자식 컴포넌트 안에서 동작했지만 밖에서 돌려도 상관없다.   

---

## 4.리액트 라우터1
페이지를 나누기 위해서는 라우터가 필요하다.  
SPA인 리액트는 페이지 하나를 다른 컴포넌트로 갈아치우면서 여러 페이지를 보여주는 것 처럼 행동한다.   
페이지 갈아치우는 것을 도와주는 라이브러리가 있는데 react-router-dom 이다. 일명 라우팅을 도와주는 라이브러리다.    

### 라우터 설치 및 세팅
react-router-dom 6 사이트에서 설치과정을 따라가면 된다.

터미널에서 아래 명령어로 라우터 설치 (6버전)  
```bash
npm install react-router-dom@6 
```

main.jsx 파일가서 
```jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
```
브라우저라우터로 App컴포넌트를 감싸고 import로 가져온다.   
내가 만든파일을 ./로 가져오고 ./없는 것은 대부분 설치한 라이브러리이다.  

Appp.jsx 파일에서
```jsx
import { Routes, Route, Link } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      <Route path="/" element={ <div>메인페이지임</div> } />
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
  )
}
```
import해주고 <Routes> 안에 <Route>를 넣으면 된다.  
<Route>는 만들 페이지라고 생각하면 된다. 메인부터 상세,어바웃 등 원하는 페이지를 많이 만들 수 있다.  
<Route> 경로로 가서 element 요소가 보여주는 것 이여서 지금까지 작업한 것은 Navbar 밑 메인페이지에 들어갈 수 있게 해주고   
상세페이지에는 다른 내용이 나올 수 있게 해준다.  

```jsx
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

    <Route path="/detail" element={ <div>상세페이지임</div> } />
        
</Routes>
```      

### 페이지 이동버튼
페이지 이동 버튼을 만들고 싶으면 <Link>테그를 이용하면 된다.  
```jsx
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>
```
to속성을 활용해서 어디로갈지 정해줄 수 있다.   
링크테크를 Navbar에 넣었는데 밑줄이 거슬린다면   
```css
text-decoration: none;
```
속성을 적용하면 된다.  

### 디테일 내용추가
```jsx
function Detail () {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;
```
위 내용을 Detail.jsx라는 별도의 파일로 만들어 컴포넌트화 시킨다. (페이지를 한 컴포넌트로 만드는 것)  
컴포넌트를 가져와 사용하기 위해서 App.jsx에서 import 후 가져온 컴포넌트 사용  
```jsx
import Detail from './Detail'

 <Route path="/detail" element={ <Detail/> } />
```

---

## 5.리액트 라우터2

### 폴더구조
라우터를 배우기 앞서 리액트 상의 폴더구조에 대해 알아보자.  
리액트는 90%는 .jsx 파일이다. 그래서 비슷한거 끼리 한 폴더에 묶는게 정리 끝이다.  

### useNavigate()
페이디 이동을 도와주는 훅이다. (훅은 유용한게 들어있는 함수)
```jsx
let navigate = useNavigate();

onClick={() => { navigate('/')}}
onClick={() => { navigate('/detail')}}

onClick={() => { navigate(1)}}
onClick={() => { navigate(-1)}}
```
특정 html에 위 요소를 추가해서 Link 테그 없이 원하는 경로로 갈 수 있게 된다.  
1,-1을 통해 앞 또는 뒤로 한페이지 이동 할 수 있게 해준다.(앞으로가기 뒤로가기버튼)

### 404페이지
뭔가 이상한 페이지로 접속을 했을 때 아무것도 안뜨는게 아니라 없는 페이지라고 404를 뛰어주고 싶으면
```jsx
<Route path="*" element={ <div>없는 페이지입니다.</div> } />
```
*을 넣어 설정하지 않은 모든 페이지에 대해 저 element를 띄워주게 된다.

### Nested Routes
/about이란 페이지에서 회사정보를 보여주고 있을 때 /about/member 에서 인원 /about/location 에서 위치 정보 등 아래로 가지가 뻗어나가고 싶을 때 사용한다.  
```jsx
<Route path='/about' element={<About/>}>
  <Route path='member' element={<Member/>}/>
  <Route path='location' element={<location/>}/>
</Route>
```
상위 라우터를 <></> 로 만들고 안에다가 이렇게 구현한다.    

상위요소에 들어가 있기 때문에 하위요소를 보여주기 위해선 <Outlet></Outlet>을 통해서 보여줘야 한다.  
```jsx
function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Member(){
  return(
    <div>
      <h5>멤버정보임</h5>
    </div>
  )
}
```
#### nested routes 언제쓰나
1. 여러 유사한 페이지 필요할 때 사용
2. 잘보면 동적인 UI처럼 사용이 가능
#### nested routes 장점
1. 이런식으로 UI 만들면 뒤로가기 버튼 이용가능
2. 페이지 이동이 쉬움(UI 스위치 조작 쉬움)

---

## 6.리액트 라우터3
비슷한 페이지가 여러개 필요하면 어떻게 할까? 라우터 여러개를 무한대로 만들어야 할까? 정답은 아니다.   
더 편한 방법이 있는데 그건 바로 url 파라미터를 이용하는 것이다.  

### url 파라미터 문법
```jsx
<Route path="/detail:id" element={ <Detail shoes={shoes}/> } />
```
위와 같은 방식으로 <mark>:작명</mark>을 통해 url 파라미터를 사용할 수 있게 된다.   

useParams() 훅을 이용해 유저가 입력한 url파라미터를 가져올 수 있는데 이를 통해 다양한 페이지를 한 컴포넌트 페이지에서 표현이 가능하다.   
```jsx
import { useParams } from "react-router-dom";

let{id} = useParams();

<p>{props.shoes[id].content}</p>
```
import로 선언 후 useParams() 함수로 변수값 저장하고 사용하면 url 파라미터 사용이 가능한 모습이다.   