import React,{useState,useEffect} from 'react'
function HseUpdate() {
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
               <h2> {house.name}</h2>
               <h3> Rent: Ksh{house.amount}</h3>
               <h4>Description</h4>
               
               <p>{house.description}</p>

        </div>
        </div> 
    ));
  return (
     <div> 
         {houseItemsList}
    </div>
  )
}

export default HseUpdate