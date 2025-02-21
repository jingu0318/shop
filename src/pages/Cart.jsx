import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    let stock = useSelector((state) => state.stock )

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
                    <tr>
                    <td>{stock[0].id}</td>
                    <td>{stock[0].name}</td>
                    <td>{stock[0].count}</td>
                    <td>변경버튼</td>
                    </tr>
                    <tr>
                    <td>{stock[1].id}</td>
                    <td>{stock[1].name}</td>
                    <td>{stock[1].count}</td>
                    <td>변경버튼</td>
                    </tr>
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;