import {Routes,Route} from "react-router-dom";
import Home from "../Pagess/Home";
import AddRestraunt from "../Pagess/AddRestraunt";
import Signup from "../Pagess/Signup";
import Login from "../Pagess/Login";
import Food from "../Pagess/Food";
import Cart from "../Pagess/Cart";
import PrivateRoute from "./PrivateRoute";




function AllRoutes(){
    return(
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add restraunt" element={<AddRestraunt/>}></Route>
        <Route path="/food" element={<Food/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        
        

      </Routes> 
      
    )
}
export default AllRoutes;