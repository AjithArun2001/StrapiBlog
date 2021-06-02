import React,{ useState,useEffect } from 'react';
import axios from 'axios';


function Navbar({search, setSearch, choice,setChoice}) {

    const [categories,setCategories] = useState([]);



    useEffect(()=>{
        axios.get('http://localhost:1337/categories').then(response => {
            setCategories(response.data);
        });
    })

    function handleChange(e){
        setSearch(e.target.value);
    };


    return (
        <>
            <div className="navbar">
                <h4 className={choice === "All" ? "selected" : ""} onClick={() => setChoice("All")}>All</h4>
                {categories.map(category => (
                    <h4 className={category.name === choice ? "selected" : ""} key={category.id} onClick={() => setChoice(category.name)}>{category.name}</h4>
                ))}
            </div> 
            <input type="text" placeholder="Search" value={search} onChange={handleChange}></input> 
        </>
    )
}

export default Navbar
