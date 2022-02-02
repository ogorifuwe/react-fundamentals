import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) 
    return JSON.parse(list);
  else
    return [];
} 

function App() {

  const [ item, setItem ] = useState('');
  const [ list, setList ] = useState(getLocalStorage);
  const [ isEditable, setIsEditable ] = useState(false);
  const [ editId, setEditId ] = useState(null);
  const [ alert, setAlert ] = useState({ isShowing: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      showAlert(true, 'Please enter a value', 'danger');
    } else if (item && isEditable) {
        const ephemeralList = list.map(currItem => {
          if (currItem.id === editId)
            return { ...currItem, title: item }
          return currItem;
        });

        setList(ephemeralList);
        setItem('');
        setEditId(null);
        setIsEditable(false);
        showAlert(true, 'Item name has been updated', 'success');
    } else {
        showAlert(true, 'Item added to the list', 'success');
        const newGroceryItem = {
          id: new Date().getTime().toString(),
          title: item
        }
        setList([ ...list, newGroceryItem ]);
        setItem('');
    }
  }

  const handleGroceryInput = (e) => {
    e.preventDefault();
    let groceryItem = e.target.value;
    setItem(groceryItem);
  }

  const showAlert = (isShowing = false, msg = '', type = '') => {
    setAlert({isShowing, msg, type});
  }

  const clearList = () => {
    showAlert(true, 'list emptied', 'danger');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'success', );
    let updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  }

  const editItem = (id) => {
    const currentItem = list.find(item => item.id === id);
    setIsEditable(true);
    setEditId(id);
    setItem(currentItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form
        className='grocery-form'
        onSubmit={handleSubmit}
      >
        {alert.isShowing && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            type='text'
            placeholder='e.g eggs'
            value={item}
            onChange={handleGroceryInput}
          />
          <button
            className='submit-btn'
            type='submit'
          >
            {isEditable ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {
        list.length > 0 && (
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              className='clear-btn'
              onClick={clearList}
            >
              Clear Items
            </button>
          </div>
        )
      }
    </section>  
  )
}

export default App
