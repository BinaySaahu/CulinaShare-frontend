import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { useSelector } from "react-redux";

const AddRecipeModal = ({ setShowModal }) => {
  const user = useSelector((state) => state.user);
  const [recipeDet, setRecipeDet] = useState({
    name: "",
    decription: "",
    time: "",
    category: "",
    ingredient: "",
    method: "",
  });
  const dataInp = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setRecipeDet({ ...recipeDet, [name]: val });
  };
  const handleAdd = async () => {
    try {
      const res = await axios.post("/recipe/addRecipe", {
        ...recipeDet,
        author: user.id,
      });
      if (res.status === 200) {
        window.location.reload();
        setShowModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center bg-black/[0.6] h-screen w-screen fixed left-0 top-0 z-[11] py-3">
      <div className="flex flex-col items-stretch gap-3 bg-white relative rounded py-6 px-4 shadow-md max-h-[600px] min-w-[300px] overflow-y-scroll">
        <div className="text-right absolute right-1 top-1">
          <CancelIcon
            onClick={() => setShowModal(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="md:text-[30px] text-[20px] font-bold text-center w-full">
          Add Recipe
        </div>
        <div className="flex gap-3 flex-col">
          <input
            type="text"
            placeholder="Name of recipe"
            className="px-2 py-4 rounded border md:text-[18px] text-[14px] w-full border-black"
            name="name"
            onChange={dataInp}
          />
          <div className="flex sm:flex-row flex-col gap-3">
            <input
              type="text"
              placeholder="Prep time"
              className="px-2 py-4 rounded border md:text-[18px] text-[14px] w-full border-black"
              name="time"
              onChange={dataInp}
            />
            <input
              type="text"
              placeholder="Veg or Non veg"
              className="px-2 py-4 rounded border md:text-[18px] text-[14px] w-full border-black"
              name="category"
              onChange={dataInp}
            />
          </div>
          <input
            type="text"
            placeholder="Description"
            className="px-2 py-4 rounded border md:text-[18px] text-[14px] w-full border-black"
            name="description"
            onChange={dataInp}
          />

          <textarea
            name="ingredient"
            id=""
            cols="30"
            rows="10"
            placeholder="Ingredients"
            className="px-2 py-4 rounded border md:text-[18px] text-[14px] w-full border-black"
            onChange={dataInp}
          ></textarea>
          <textarea
            name="method"
            id=""
            cols="30"
            rows="10"
            placeholder="Making procedure"
            className="px-2 py-4 rounded border md:text-[18px] text-[14px] w-full border-black"
            onChange={dataInp}
          ></textarea>

          <button
            className="rounded-[20px] border-1 border-solid border-black/[0.9] bg-bg_secondary1 text-[#ffffff] text-[12px] font-bold py-[12px] px-[45px] uppercase transition-transform duration-1000 ease-in"
            onClick={handleAdd}
          >
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;
