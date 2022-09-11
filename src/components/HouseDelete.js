import React from 'react'
import './css/houseproducts.css'
function HouseDelete({house, onDeleteClick}) {
    const { id, } = house;

    function handleDeleteClick() {
        onDeleteClick(id);
      }
  return (
    <div>
        <button  onClick={handleDeleteClick} className='imageButton2 imageButton3'> Delete</button>
      </div>
  )
}

export default HouseDelete