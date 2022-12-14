import React,{useState} from 'react'
import "./css/houseform.css"

function HouseForm() {
    const [formData, setFormData] = useState({
        name: "",
        image1: "",
        image2: "",
        image3: "",
        
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
       
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/houses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:formData.name,
            first_image:formData.first_image,
            third_image:formData.third_image,
            fourth_image:formData.fourth_image,
            rent:formData.rent,
            description:formData.description,
            
          }),
        });
      }
    
      return (
        <section className='sectionBody'>
          <h1>Add New House</h1>
          <form onSubmit={handleSubmit}>
          <div className='loginRight'>
            <div className='loginBox'>
            <label>
            <span className='spanText'>House Name:</span>
              <input className="loginInput"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
            <span className='spanText'>First Image:</span>
              <input className="loginInput"
                type="text"
                name="first_image"
                value={formData.fourth_image}
                onChange={handleChange}
              />
            </label>
            <label>
            <span className='spanText'>Second Image:</span>
              <input className="loginInput"
                type="text"
                name="second_image"
                value={formData.second_image}
                onChange={handleChange}
              />
            </label>
            <label>
             <span className='spanText'>  Third image:</span>
              <input className="loginInput"
                type="text"
                name="third_image"
                value={formData.third_image}
                onChange={handleChange}
              />
            </label>
            <label>
             <span className='spanText'>Hse Description:</span>
              <input className="loginInput"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <label>
             <span className='spanText'>Rent Amount:</span>
              <input className="loginInput"
                type="text"
                name="rent"
                value={formData.rent}
                onChange={handleChange}
              />
            </label>
         
            
            <button type="submit" className="loginRegisterButton">Add House</button>
            </div>
            </div>
          </form>
        </section>
      );
}

export default HouseForm