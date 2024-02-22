import React, { useEffect, useState } from "react";
import RecipeCard from "../homepage/RecipeCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../DropDown";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils";

const FavMain = () => {
  const [dropDown, setDropDown] = useState(false);
  const [cat, setCat] = useState("All Recipes");
  const { recipes } = useSelector((state) => state.allRecipes);
  const user = useSelector((state) => state.user);
  const [catArr, setCatArr] = useState(recipes);

  const [favs,setFavs] = useState([])

  const loadData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/recipe/getFavorites/${user?.id}`);
      if (res.status === 200) {
        setFavs(res?.data?.favRecipes);
        setCatArr(res?.data?.favRecipes)
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, [user]);
  useEffect(() => {
    if (cat !== "All Recipes") {
      const category = favs?.filter((re) => re.category === cat);
      console.log(category)
      setCatArr(category);
    }else{
      setCatArr(favs)
    }
  }, [cat]);

  return (
    <>
      <div className="m-4 md:mt-[100px] mt-[120px] md:text-[30px] text-[20px] font-bold text-center flex justify-between items-center relative">
        <p>Favorite Recipes</p>
        <button
          className="border border-[#a7462c] rounded py-2 px-5 text-[12px] font-semibold bg-bg_secondary1 shadow-btn_shadow text-white "
          onClick={() => setDropDown(!dropDown)}
        >
          {cat}
          <ArrowDropDownIcon />
        </button>
        {dropDown && <DropDown setCat={setCat} setDropDown={setDropDown} />}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-3">
        {catArr?.map((recipe, idx) => (
          <RecipeCard recipe={recipe} key={idx} />
        ))}
      </div>
    </>
  );
};

export default FavMain;
