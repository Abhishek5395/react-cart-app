import './App.css';
import AddItemForm from './Components/AddItemForm';
import ShoppingCart from './Components/ShoppingCart';
import { useState } from 'react';

function App() {

  var title = 'React Shopping App';

  const [openPopUp , setOpen] = useState(false);
    const openForm = () =>{
        setOpen(true);
    }
    const closeForm = () =>{
      setOpen(false);
    }

 
    const [itemList, setItemList] = useState([]);
    const itemHandler = (iName, iPrice) =>{
      setItemList((prevItemList) => {
        return [...prevItemList, {name:iName, price:iPrice, id:Math.random().toString()}];
      });
    };

    const deleteItemHandler = (cartId) =>{
      var carts = [...itemList]; // OR //
      // let persons = itemList.slice(); //creates new array, does not mutate state using reference
  
      let deletedPerson = carts.splice(cartId, 1)
      //console.log(`${deletedPerson[0].name} with id ${deletedPerson[0].id} was deleted`);
      setItemList(carts);
      
    }

  return (
    <div className="App">
      <header className={`App-header ${openPopUp ? 'active' : ''}`}>
      <span className={`close ${openPopUp ?'active': ''}`} onClick={closeForm}>&times;</span>
        <p className="heading">{title}</p>
        <div className='app-wrapper'>
        { openPopUp && <AddItemForm closeForm={closeForm} onAddItem={itemHandler} /> }
        </div>
        <div className={`shopping-page ${openPopUp ? 'active' : ''}`}>
          <div className='cart-heading'>Shopping Cart</div>
          <button className='addItem' onClick={openForm}>Add Item</button>
          <div className={`shopping-cart-wrapper ${'active'}`}>
          <ShoppingCart deleteItem={deleteItemHandler} cartArray={itemList} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
