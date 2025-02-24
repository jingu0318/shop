import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { plusNum } from './../store/cartSlice.jsx'
import { useBear } from './../store.jsx';

function Cart() {
    let cart = useSelector((state) => state.cart )
    let user = useSelector((state) => state.user)
    let dispatch = useDispatch()

    //redux는 함수를 사용하기 위해 useDispatch() 함수를 불러와야되지만 zustand는 그럴 필요가 없다.
    const {bear, increaseBear, removeAllBear} = useBear();

    return(
        <div>
            <h6>{user}의 장바구니</h6>
            <div>
                <h2>Count : {bear}</h2>
                <button onClick= {increaseBear}>increase</button>
                <button onClick= {removeAllBear}>reset</button>
            </div>
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