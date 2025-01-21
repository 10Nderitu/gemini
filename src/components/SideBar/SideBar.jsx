 import React from "react"
 import './SideBar.css'
 import { assets } from "../../assets/assets"
 
 const sideBar = () => {
   return (
     <div className="sideBar">
        <div className="top">
            <img src={assets.menu} alt="" />
        </div>
        <div className="bottom">

        </div>
 
     </div>
   )
 }
 
 export default sideBar