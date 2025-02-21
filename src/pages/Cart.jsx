import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    let cart = useSelector((state) => state.cart )

    return(
        <div>
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
                                <td>변경버튼</td>
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