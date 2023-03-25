import React, {useState} from 'react'
import '../Components/ShoppingCart.css';

function ShoppingCart(props) {
    
    const deleteHandler = (cartId) =>{
       props.deleteItem(cartId);
    }

    return (
    <>
     <div className='cart-items'>
        <table>
            <thead className='table-heading'>
                <tr>
                <th>Sr No</th>
                <th>Item Name</th>
                <th>Item Price</th>
                </tr>
            </thead>
            <tbody>
            {props.cartArray.map((cart, index) =>(
                <tr key={cart.id}>
                    <td>{index + 1}</td>
                    <td className='middleline'>{cart.name}</td>
                    <td>{cart.price}</td>
                    <td><button className='Delete' onClick={()=> deleteHandler(index)}>Delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>
     </div>
    </>
  )
}


export default ShoppingCart