import {Table ,Button} from 'react-bootstrap';
import { useUser, useCart } from './../store copy.jsx';


function Cart() {

    // const {user, changeName} = useUser();
    const {cart, addCount, bddCount, removeItem, removeAll} = useCart();
    let total = 0

    return(
        <div>
            {/* <h6>{user}의 장바구니</h6>
            <button onClick={() => changeName()}>+</button> */}
            <Button onClick ={() => removeAll()} style={{marginTop : '20px', marginLeft : '20px'}} >전체삭제하기버튼</Button>
            <Table>
                <thead>
                    <tr>
                    <th>상품번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>가격</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        cart.map((a,i)=>{
                            total += parseInt(a.count) * parseInt(a.price)
                            return(
                                <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td>{a.price}</td>
                                <td>
                                    <Button onClick={() => addCount(a.id)} style={{marginRight : '5px'}}>+</Button>
                                    <Button onClick={() => bddCount(a.id)} >-</Button>
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
            <hr/>
            <h4 style={{margin : '20px'}} >총합: {total}</h4>
            <button className="btn btn-danger" style={{marginLeft : '20px'}} onClick={()=>{ }} >주문하기</button>           
        </div>
    )
}

export default Cart;