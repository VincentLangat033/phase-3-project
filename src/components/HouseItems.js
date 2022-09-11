import React, { useEffect, useState } from 'react'
import HouseItemsUpdate from './HouseItemsUpdate';
import './css/houseitems.css'
function HouseItems() {
    const [houseItems, setHouseItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9292/houses')
        .then((res)=>res.json())
        .then((data)=>setHouseItems(data))
        

    })
    const houseItemsList = houseItems.map((house)=>(
        <div className='mainhouseItems'>
            <div className='houseItems'>
                <div className='imageParentDiv'>
                <div className='imageOneList'>
                      <img src= {house.first_image} alt="Image house" className='imageList'></img>
                </div>
                <div className='imageTwoList'>
                <img src= {house.first_image} alt="Image house" className=''></img>
                <img src= {house.first_image} alt="Image house" className=''></img>
                <img src= {house.first_image} alt="Image house" className=''></img>
                <img src= {house.first_image} alt="Image house" className=''></img>

                </div>
            </div>
               
               <p> {house.name}</p>
            
            

        </div>
        </div> 
        

    ));
  return (
     <div> 
         {houseItemsList}
         
       

    </div>
  )
}

export default HouseItems