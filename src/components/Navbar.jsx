/* eslint-disable react/prop-types */
// import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'



const Navbar = ({setCollapsed}) => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="navbar">
        <div className="logo">
            <h2 onClick={()=>setCollapsed(prev => !prev)} style={{cursor:"pointer"}}>LOGO</h2>
        </div>
        <div style={{color:"white"}}>{`Employee count - ${count}`}</div>
        <div className="item">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Profile</Link></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar