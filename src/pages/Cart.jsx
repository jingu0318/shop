import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { changeName } from './../store.jsx'

function Cart() {
    let cart = useSelector((state) => state.cart )
    let user = useSelector((state) => state.user)
    let dispatch = useDispatch()

    return(
        <div>
            {user}
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
                                        dispatch(changeName())
                                    }}>버튼임</button>
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