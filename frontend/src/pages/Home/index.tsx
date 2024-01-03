import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <div>home</div>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
        
    </>
  )
}

export default Home