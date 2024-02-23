import React, { useEffect, useState } from "react";
import RecipeCard from "../homepage/RecipeCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../DropDown";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { toggleLoading } from "../../store/slices/userSlice";
import Loader from "../Loader";
import { Toaster } from "react-hot-toast";

const FavMain = () => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const [cat, setCat] = useState("All Recipes");
  const { recipes } = useSelector((state) => state.allRecipes);
  const user = useSelector((state) => state.user);
  const [catArr, setCatArr] = useState(recipes);

  const [favs, setFavs] = useState([]);

  const loadData = async () => {
    // dispatch(toggleLoading(true));
    try {
      const res = await axios.get(
        `${BASE_URL}/recipe/getFavorites/${user?.id}`
      );
      if (res.status === 200) {
        setFavs(res?.data?.favRecipes);
        setCatArr(res?.data?.favRecipes);
        dispatch(toggleLoading(false));
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(toggleLoading(true));
  }, []);
  useEffect(() => {
    loadData();
  }, [user]);
  useEffect(() => {
    if (cat !== "All Recipes") {
      const category = favs?.filter((re) => re.category === cat);
      console.log(category);
      setCatArr(category);
    } else {
      setCatArr(favs);
    }
  }, [cat]);

  return (
    <>
      <div className="m-4 md:mt-[100px] mt-[120px] md:text-[30px] text-[20px] font-bold text-center flex justify-between items-center relative">
      <Toaster position="top-center" reverseOrder={false} />
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
      {user.isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <Loader
            primaryColor="#000000"
            secondaryColor="#e0e0e0"
            height={50}
            width={50}
          />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-3">
          {catArr?.map((recipe, idx) => (
            <RecipeCard recipe={recipe} key={idx} />
          ))}
        </div>
      )}
    </>
  );
};

export default FavMain;
