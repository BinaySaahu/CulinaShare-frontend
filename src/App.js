import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import FavoritesPage from './pages/FavoritesPage';
import AuthPage from './pages/AuthPage';
import MoboNav from './components/MoboNav';
import Menu from './components/Menu';
import MyRecipePage from './pages/MyRecipePage';
import RecipeDescPage from './pages/RecipeDescPage';
import axios from 'axios';
import AboutUs from './pages/AboutUs';

function App() {
  axios.defaults.baseURL = "http://localhost:8001/"
  return (
    <div className="">
      <NavBar/>
      <MoboNav/>
      <Menu/>
      <Routes>
        <Route path='/' element = {<AuthPage/>}/>
        <Route path='/home' element = {<HomePage/>}/>
        <Route path='/favorites' element = {<FavoritesPage/>}/>
        <Route path='/myRecipes' element = {<MyRecipePage/>}/>
        <Route path='/desc/:id' element = {<RecipeDescPage/>}/>
        <Route path='/about' element = {<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
