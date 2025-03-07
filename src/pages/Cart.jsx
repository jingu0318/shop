import {Table ,Button} from 'react-bootstrap';
import { useUser, useCart } from './../store copy.jsx';


function Cart() {

    // const {user, changeName} = useUser();
    const {cart, addCount, bddCount, removeItem, removeAll} = useCart();

    return(
        <div>
            {/* <h6>{user}의 장바구니</h6>
            <button onClick={() => changeName()}>+</button> */}
            <Button onClick ={() => removeAll()}>전체삭제하기버튼</Button>
            <Table>
                <thead>
                    <tr>
                    <th>상품번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        cart.map((a,i)=>{
                            return(
                                <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td>
                                    <Button onClick={() => addCount(a.id)}>+</Button>
                                    <Button onClick={() => bddCount(a.id)}>-</Button>
                                </td>
                                <td>
                                    <Button onClick={() => removeItem(a.id)}>X</Button>
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