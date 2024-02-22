import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../DropDown";
import { useSelector } from "react-redux";

const RecipesSection = () => {
  const [dropDown, setDropDown] = useState(false);
  const [cat, setCat] = useState("All Recipes");

  const { recipes } = useSelector((state) => state.allRecipes);
  const [catArr, setCatArr] = useState(recipes);

  useEffect(() => {
      if (cat !== "All Recipes") {
        const category = recipes.filter((r) => r.category === cat);
        setCatArr(category);
      } else {
        setCatArr(recipes);
        console.log(recipes);
      }
  }, [cat,recipes]);

  return (
    <>
      <div className="m-4 md:mt-[100px] mt-[120px] md:text-[30px] text-[20px] font-bold text-center flex justify-between relative items-center">
        <p>Recipes</p>
          <button
            className="border border-[#a7462c] rounded py-2 px-5 text-[12px] font-semibold bg-bg_secondary1 shadow-btn_shadow text-white "
            onClick={() => setDropDown(!dropDown)}
          >
            {cat}
            <ArrowDropDownIcon />
          </button>
          {dropDown && <DropDown setCat={setCat} setDropDown={setDropDown} />}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-3">
        {catArr?.map((recipe, idx) => (
          <RecipeCard recipe={recipe} key={idx} />
        ))}
        {/* <RecipeCard />
        <RecipeCard />
        <RecipeCard /> */}
      </div>
    </>
  );
};

export default RecipesSection;
