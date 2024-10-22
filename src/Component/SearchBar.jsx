import React,{useState,useEffect} from "react"


function searchBar(){
    const[searchBar,setSearchBar]= useState([])
        useEffect(()=>{
            fetch("http://localhost:5000/products")
            .then ((response)=>response.json())
            .then((data)=> setSearchBar(data))
        },[]);

    return(
        <div>
           <input 
           type ="text"
           name= "search"
           onchange={handleCLick}
           />
        </div>
    )
}

export default searchBar;