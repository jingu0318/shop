import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail (props) {

    let{id} = useParams();
    let [discount1, setdiscount1] = useState(true);
    let [discount2, setdiscount2] = useState(true);
    //let url = "https://codingapple1.github.io/shop/shoes"+(id+1)+".jpg"
    let shoe = props.shoes.find((a) => a.id == id)


    useEffect(()=>{
        //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
        setTimeout(() => {
            setdiscount1(false)
        }, 2000);
        setTimeout(() => {
            setdiscount2(false)
        }, 1000);
      }, []);

    return( 
            <div className="container">
                {discount2 == true ? <Discounttwo/> : discount1 == true ? <Discountone/> : null }
                <div className="row">
                    <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div>
    )
}

function Discounttwo() {
    return(
        <div className="alert alert-warning">
            2초 안에 구매시 할인
        </div>
    )
}

function Discountone() {
    return(
        <div className="alert alert-warning">
            1초 안에 구매시 할인
        </div>
    )
}

export default Detail;