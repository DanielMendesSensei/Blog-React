import { useState, useEffect } from "react";

import { Link } from "react-router-dom"

import "./Home.css"
// import axios from "axios";
import blogFetch from "../axios/config";

const Home = () => {

  const [posts, setPosts] =useState([])

  const getPosts = async()=>{

    // console.log("Testando!")

    try {
      
      // const resposne = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const resposne = await blogFetch.get("/posts")

      const data = resposne.data
      // console.log(data)

      setPosts(data)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{

    getPosts()

  }, [])
  
  return <div className="home">
    <h1>Últimos Posts</h1>
    {/* {posts.length === 0 ? (<p>Carregando...</p>):(<p>Carregou</p>)} */}
    {posts.length === 0 ? (<p>Carregando...</p>):(
      posts.map((post)=> (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn">
            Ler mais
          </Link>
        </div>
      ))
    )}
  </div>;
}

export default Home