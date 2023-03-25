import React, {useState} from 'react'
import '../Components/AddItemForm.css';

function AddItemForm(props) {

  const [NewItemName, setItemName] = useState('');
  const [NewItemPrice, setItemPrice] = useState('');
  
  const handleForm = (e) =>{
     e.preventDefault();
     
     if(NewItemName.trim().length === 0 || NewItemPrice.trim().length === 0){
       return;
     }
     props.onAddItem(NewItemName, NewItemPrice);

     setItemName('');
     setItemPrice('');
     props.closeForm();
  }

  const itemNameHandler = (event) =>{
    setItemName(event.target.value);
  }
  const itemPriceHandler = (event) =>{
    setItemPrice(event.target.value);
  }

  return (
    <form className="form-div" onSubmit={handleForm}>
        <div className="form-group">
            <label htmlFor='item name'>Enter Item Name</label>
            <input onChange={itemNameHandler} value={NewItemName} className="form-input" type="text" required />
        </div>        
        <div className="form-group">
            <label htmlFor='item price'>Enter Item Price</label>
            <input onChange={itemPriceHandler} value={NewItemPrice} type="number" className="form-input" required />
        </div>
        <button className="AddBtn" type="submit">Add Item To Cart</button>
    </form>
  )
}

export default AddItemForm