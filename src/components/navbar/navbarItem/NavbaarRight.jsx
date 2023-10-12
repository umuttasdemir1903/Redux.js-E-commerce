import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbaarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);




  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-8 cursor-pointer">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search..."
        />
        <BsSearch size={25} />
      </div>
      <AiOutlineHeart size={25} />
      <div onClick={() => navigate('card')} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default NavbaarRight;
