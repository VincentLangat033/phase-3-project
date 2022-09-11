import React,{useState} from 'react'
import './css/houseproducts.css'

function HouseStateUpdate({house}) {
    const { id } = house;
    const [setAsReserved,setMarkedAsRead]=useState("")

      function handleMarkedAsRead(id) {
      setMarkedAsRead((markAsRead) => !markAsRead);
    }
     const isSetAsRserved= setAsReserved ? "Set as Reserved" : "Set as Unreserved"
  return (
    <div>
        <button  onClick={handleMarkedAsRead} className='imageButton2 imageButton3'>{isSetAsRserved}</button>
      </div>
  )
}

export default HouseStateUpdate