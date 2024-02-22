import React, { useEffect } from 'react'
import HeroSection from '../components/homepage/HeroSection'
import RecipesSection from '../components/homepage/RecipesSection'


const HomePage = () => {
  return (
    <div className='px-3'>
      <HeroSection/>
      <RecipesSection/> 
    </div>
  )
}

export default HomePage
