import React,{useState} from 'react'
import "./css/houseform.css"

function HouseForm() {
    const [formData, setFormData] = useState({
        name: "",
        image1: "",
        image2: "",
        image3: "",
        // answer3: "",
        // correctIndex: 0,
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
            // answers: [
            //   formData.answer1,
            //   formData.answer2,
            //   formData.answer3,
            //   formData.answer4,
            // ],
            // correctIndex: parseInt(formData.correctIndex),
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
            {/* <label>
              Answer 4:
              <input
                type="text"
                name="answer4"
                value={formData.answer4}
                onChange={handleChange}
              />
            </label> */}
            {/* <label>
              Correct Answer:
              <select
                name="correctIndex"
                value={formData.correctIndex}
                onChange={handleChange}
              >
                <option value="0">{formData.answer1}</option>
                <option value="1">{formData.answer2}</option>
                <option value="2">{formData.answer3}</option>
                <option value="3">{formData.answer4}</option>
              </select>
            </label> */}
            <button type="submit" className="loginRegisterButton">Add House</button>
            </div>
            </div>
          </form>
        </section>
      );
}

export default HouseForm