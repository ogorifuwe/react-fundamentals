import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, removeItem, editItem }) => {
  
  const itemsList = items.map(item => {
    const { id, title } = item;
    return (
      <article
        key={id}
        className='grocery-item'
      >
        <p className='title'>{title}</p>
        <div className='button-container'>
          <button
            className='edit-btn'
            type='button'
            onClick={ () => editItem(id) }
          ><FaEdit /></button>
          <button
            className='delete-btn'
            type='button'
            onClick={ () => removeItem(id) }><FaTrash /></button>
        </div>
      </article>
    )
  })

  return (
    <div className='grocery-list'>
      {itemsList}
    </div>
  )
}

export default List
