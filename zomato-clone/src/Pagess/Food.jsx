import React, { useState,useEffect } from 'react'
import axios from "axios";
import "./Food.css";
import Cart from './Cart';




const Food = () => {
    const [data,setData]=useState([])
    //const [cart,setCart]=useState([])
    
    
    //const [currentPage,setCurrentPage]=useState(1);



    // pagination start
    // const ItemPerPage=6;
    // const rows=data.slice(currentPage * ItemPerPage, (currentPage + 1) * ItemPerPage)
    // const numberOfPages=Math.ceil(data.length / ItemPerPage)
    // const pageIndex=Array.from({length : numberOfPages},(_,id)=>id+1)

    // const handlePageChange=(pg)=>{
    //     setCurrentPage(pg);
    // }
    // pagination end

   

    useEffect(()=>{
        axios.get('https://food-data-zomato-clone.onrender.com/foodData')
        .then((res)=>{
            setData(res.data); 
        })
        .catch((err)=>console.log(err))
    },[])

// add to cart
// const addToCart = (elem) => {
//     alert("Item added to cart!!")
//     setCart([...cart, elem]);
//     console.log(elem)
    
//   };



    // filter by type
    
    const handleFilterVeg=()=>{
        const filteredVeg = data.filter(item =>
             item.type==="Vegetarian")
    setData(filteredVeg);
    //console.log(filtered)
          
      }
      const handleFilterNonVeg=()=>{
        const filteredNon = data.filter(item =>
             item.type==="Non Vegetarian")
    setData(filteredNon);
    //console.log(filtered)
          
      }

    //   filter by category


    const handleFilterNorth=()=>{
        const filteredNorth = data.filter(item =>
             item.category==="North Indian")
    setData(filteredNorth);
        }

    const handleFilterSouth=()=>{
        const filteredSouth = data.filter(item =>
             item.category==="South Indian")
    setData(filteredSouth);
        }


        const handleFilterChinese=()=>{
            const filteredChinese = data.filter(item =>
                 item.category==="Chinese")
        setData(filteredChinese);
            }
        

        // filter by category end


        // sorting

      const handleHigh=()=>{
        const highPrice=[...data].sort((a,b) => b.price - a.price);
        setData(highPrice);
        console.log(highPrice)
        }
        const handleLow=()=>{
            const lowPrice=[...data].sort((a,b) => a.price - b.price);
        setData(lowPrice);
        
        }
        // sorting end
        



  return (
    <>

    <div className='filter_sorting'>
        <div>
        <h3>Filter By Type</h3>
    <button onClick={handleFilterVeg}>Vegetarian</button>
    <button onClick={handleFilterNonVeg}>Non-Vegetarian</button>
    </div>
    <div>
    <h3>Filter by Category</h3>
    <button onClick={handleFilterNorth}>North Indian</button>
    <button onClick={handleFilterSouth}>South Indian</button>
    <button onClick={handleFilterChinese}>Chinese</button>
    
    
    

    </div>

    <div>
        <h3>Sort By Price</h3>
    <button onClick={handleLow}>Low to High</button>
<button onClick={handleHigh}>High to Low</button>
</div>

    </div>
    <div className='food-mainbox'>
    {data.map((elem,id)=>{
        return(
            
            <div className="div-box" key={id}>
                
                
            <img src={elem.image} alt="food-image" />
            
            <h2>{elem.name}</h2>
            <h5>{elem.category}</h5>
            <h5>Rs. {elem.price}/-</h5>
            <p>{elem.rating}</p>
            <p>{elem.type}</p>
    
          
             {/* <button className='cartBtn' onClick={() => addToCart(elem)}>Add to Cart</button> */}
            



            </div>
            
        )
    })}



    </div>

    {/* <div className='paginationn'>
    <button style={{backgroundColor:"white",color:"orangered",width:"70px",border:"1px solid orangered",padding:"10px"}} onClick={()=>handlePageChange(currentPage-1)}>Previous</button>
{pageIndex.slice(Math.max(0,currentPage-2),
 Math.min(numberOfPages,currentPage-3))}
<button style={{backgroundColor:"white",color:"orangered",width:"70px",border:"1px solid orangered",padding:"10px"}} onClick={()=>handlePageChange(currentPage+1)}>Next</button>
    </div> */}

    </>
  )

  
}

export default Food