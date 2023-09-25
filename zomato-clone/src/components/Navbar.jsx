
import {Link,NavLink} from "react-router-dom";
import "./Navbar.css";
import {BsFillPersonFill} from "react-icons/bs"
import {BsCartFill} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react";
import Cart from "../Pagess/Cart";





const links=[
    {path:"/",title:"HOME"},
    {path:"/add restraunt",title:"ADD RESTRAUNT"},
    {path:"/food",title:"FOOD"},

   
];


function Navbar(){
    

    <div className="top"><h1>top</h1></div>

    const defaultLinkStyle={textDecoration:"none",color:"black"}
    const activeLinkStyle={textDecoration:"none",color:"orangered"}



   
    return(
        <div className="nav" style={{display:"flex",
      alignItems:"center",
      justifyContent:"space-evenly",
      paddingTop:"10px",
      paddingBottom:"10px",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      background:"white",
      fontWeight:"1000",
      fontFamily:"revert"
      
      
      
      }}>
        <img src="https://i.postimg.cc/htwnGHS8/zomato-black-logo.png" marginTop="20px" width={"100px"} alt="" />
        <div className='search_container'>
            <AiOutlineSearch/>
            <input type="text" placeholder='Search delicious food items..' />
            </div>
            
        {links.map(({path,title})=>(
            <NavLink 
            style={({isActive})=>{
                return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
            key={path}
            to={path}>
                {title}
            </NavLink>
            
        ))}
        <Link to="/signup"><BsFillPersonFill color="orangered" size="25px"/></Link>
        <Link to="/cart"><BsCartFill  color="orangered" size="25px" /> </Link>



      </div>

    )
}
export default Navbar;