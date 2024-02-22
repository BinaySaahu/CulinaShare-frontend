import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [activeMenu,setActiveMenu] = useState("Home")
    const activeClass = "text-[white] bg-bg_secondary1"
  return (
    <div className='md:hidden flex justify-between items-center gap-1 p-1 mt-[64px] w-full fixed top-0 left-0 bg-white z-[9]'>
        <Link to='/home'><button className={`rounded-full px-5 py-1 text-[13px] border ${activeMenu == 'Home' ? activeClass:'text-black'}`} onClick={()=>setActiveMenu('Home')}>Home</button></Link>
        <Link to='/myRecipes'><button className={`rounded-full px-5 py-1 text-[13px] border ${activeMenu == 'My recipe' ? activeClass:'text-black'}`} onClick={()=>setActiveMenu('My recipe')}>My Recipes</button></Link>
        <Link to='/favorites'><button className={`rounded-full px-5 py-1 text-[13px] border ${activeMenu == 'Favorites' ? activeClass:'text-black'}`} onClick={()=>setActiveMenu('Favorites')}>Favorites</button></Link>
    </div>
  )
}

export default Menu
