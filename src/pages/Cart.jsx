import {Table} from 'react-bootstrap';
import { useUser, useCart } from './../store copy.jsx';


function Cart() {

    const {user, changeName} = useUser();
    const {cart, addCount} = useCart();

    return(
        <div>
            <h6>{user}의 장바구니</h6>
            <button onClick={() => changeName()}>+</button>
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
                                    <button onClick={() => addCount(i)}>+</button>
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