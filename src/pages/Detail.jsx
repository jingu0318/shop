import { useParams } from "react-router-dom";
import styled from "styled-components";

let Yellowbtn = styled.button`
    background : ${props => props.bg};
    color : black;
    padding : 10px;
`

let Box = styled.div`
    background : grey;
    padding : 20px;
`

function Detail (props) {

    let{id} = useParams();
    //let url = "https://codingapple1.github.io/shop/shoes"+(id+1)+".jpg"
    let shoe = props.shoes.find((a)=>{
        return a.id == id
    })

    return( 
            <div className="container">
                <Box>
                <Yellowbtn bg="blue">버튼</Yellowbtn>
                </Box>
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

export default Detail;