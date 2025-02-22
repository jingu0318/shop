import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { plusNum } from './../store/cartSlice.jsx'

function Cart() {
    let cart = useSelector((state) => state.cart )
    let user = useSelector((state) => state.user)
    // let oneCart = cart.find((a)=>{
    //     return a.id == 0
    // })
    let dispatch = useDispatch()

    return(
        <div>
            <h6>{user}의 장바구니</h6>
            <Table>
                <thead>
                    <tr>
                    <th>상품번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((a,i)=>{
                            return(
                                <tr key={i}>
                                <td>{cart[i].id}</td>
                                <td>{cart[i].name}</td>
                                <td>{cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(plusNum(i))
                                    }}>+</button>
                                </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;