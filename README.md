# 쇼핑몰 사이트 만들기

## 1. 새로운 리액트 프로젝트 생성
리액트 프로젝트 생성은 이제 쉽게 할거라 믿는다.  

## React-Bootstrap 라이브러리 설치
레이아웃을 복붙식으로 편하게 개발가능한 라이브러리이다.  
외부라이브러리 설치 방식은 똑같다. 구글에서 라이브러리docs 사이트에 들어가 설치 및 시작에 들어간다.   
알려주는 방법 그대로 설치를 진행하면 된다. 설치명령어는 언제든 바뀔 수 있어서 docs 들어가 직접확인 필요   
```bash
npm install react-bootstrap bootstrap
```
명령어 입력뿐만 아니라 css 파일 또는 index.html 파일에 선택해서 넣으라는 것을 집어넣어준다.

## React-Bootstrap 사용법
부트스트랩 docs에서 버튼을 검색하고 import 및 원하는 버튼을 가져다가 복붙으로 사용  

---

## 이미지 넣는 법
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

## 상품 레이아웃 만들기
레이아웃으로 가로로 3개 균등하게 나우기 위해선 bootstrap에 가서 columns 혹은 grids 검색하면 잘 나온다.  
가져와서 사용하고 column 테그 안에 각각 상품명과 이미지테그를 삽입해서 사용하면 된다.  
img 테그 안에 src ="" 를 이용해서 주소를 넣는데 html안에 넣는거니까 아까처럼 import해서 넣거나 외부호스팅된 이미지라면 그냥 이미지 절대주소를 넣으면 된다.

## public 폴더
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

## 코드 길어지면 import export 문법 문법
데이터를 저장하기 위한 jsx 파일을 하나 생성한다. <mark>길고 복잡한 state는 다른 파일로 빼는게 좋다.</mark>   
이 데이터를 이용하기 위해선 import,export가 필요하다.   
타 파일에 있는 변수를 사용하고 싶다면 다른 파일에 있는 변수를 export하고 App.jsx에서 import하면 끝   

```jsx
export default 변수명;
export {변수1, 변수2}; //여러개 변수 보내고 싶을 때

import 작명 from './파일경로이름'
import {변수1, 변수2} from './파일경로이름' //여러개받을때
```

## 길고 복잡한 state 데이터바인딩
복잡한 자료에서 데이터 뽑을 땐 시작기호만 잘 보면된다.   
시작기호가 [] 대괄호로 시작하면 array 자료이다. [0] 이렇게 뽑으면 된다.   
시작기호가 {} 중괄호로 시작하면 object 자료이다. .키명 이렇게 뽑으면 된다.   

해야할 일 
1. 상품목록 컴포넌트화 o
2. 컴포넌트 안 데이터바인딩 o
3. 반복적인 컴포넌트 map반복문 활용하여 하나로 축약
