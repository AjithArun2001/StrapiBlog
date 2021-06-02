import React,{ useState,useEffect } from 'react';
import axios from 'axios';


function Blogs({search,choice}) {

    const [posts,setPosts] = useState([]);

    const ApiUrl = 'https://gentle-mountain-91644.herokuapp.com'; 


    useEffect(()=>{
        axios.get('https://gentle-mountain-91644.herokuapp.com/blogs').then(response => {
            setPosts(response.data);
        });
    })


    function checkCategory(post){

        if(choice === "All" || post.categories[0].name === choice){
            return true
        }
        else{
            return false;
        }
    }

    function searchName(post){
        if(post.name.toLowerCase().indexOf(search) !== -1){
            return true
        }
        else{
            return false;
        }
    }
    
    return (
        <>
            {posts.map(post => checkCategory(post) && searchName(post) && 
                (<div className="blog-div" key={post.id}>
                    <img src={ApiUrl + post.cover.formats.thumbnail.url} alt={post.name} />
                    <h5>{post.name}</h5>
                    <p>{post.content}</p>
                    <span>Category: {post.categories[0].name}</span>
                </div>)
            )}
        </>
    )
}

export default Blogs
