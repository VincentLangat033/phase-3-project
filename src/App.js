import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register"
import SideNavBar from "./components/SideNavBar";
import '../src/components/css/house.css'
import { Route, Routes } from "react-router-dom";
import HouseProducts from "./components/HouseProducts";
import HouseForm from "./components/HouseForm";
import HseUpdate from "./components/HseUpdate";
import About from "./components/About";
import { useEffect, useState } from "react";

function App() {

  const [logged,setLogged]= useState(false)
  const [useremail,setuseremail]=useState("")
  const [userpassword,setuserpassword]=useState("")
  const [users,setusers]=useState([])
  const [ success,setsuccess]=useState(true)
 
  useEffect(()=>{
   fetch("http://localhost:9292/users")
   .then(res=>res.json())
   .then(data=>setusers(data))
 },[])
 
  function handlesubmit(e){
  e.preventDefault()
 
  users.filter((user)=>{
   if(user.email ===useremail && user.password_digest===userpassword){
     setLogged(true)
     setuseremail("")
     setuserpassword("")
   } else{
    setuseremail("")
    setuserpassword("")
    setsuccess(false)
    e.target.reset()
   }
  return true
   
   
  })
  }
 
  
  return (
    logged ?
    <div>
      <NavBar />
     
      <div className='mainContent1'>

       <div className='sideNavBar1'>
       {/* <SideNavBar /> */}
       
          
        </div>
        <div className='midContentBody1'>
        
          <Routes>
       <Route exact path="/" element={<HouseProducts />}/>
       <Route exact path="/houseform" element ={<HouseForm />} />
       <Route exact path="/updatehousename" element ={<HseUpdate />} />
       <Route exact path="/about" element ={<About />} />
       <Route exact path="/register" element ={<Register />} />
       <Route exact path="/login" element ={<Login />} />
       </Routes>

        </div>

      </div> 
      </div> : <Login setuseremail={setuseremail} setuserpassword={setuserpassword} handlesubmit={handlesubmit} setLogged={setLogged}/>


  );
}

export default App;
