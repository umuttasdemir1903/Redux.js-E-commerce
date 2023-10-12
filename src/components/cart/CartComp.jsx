import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between border p-4 shadow rounded-md">
      <img className="w-[150px] h-[200px] object-contain" src={cart?.image} />
      <div className="w-[476px]">
        <div className="text-2xl font-bold">{cart?.title}</div>
      </div>
      <div className="text-2xl">
        <span className="text-green-600 text-3xl pr-2">$</span>
        {cart?.price} ({cart?.quantity})
      </div>
      <div onClick={() =>dispatch (removeFromCart(cart?.id))} className="bg-red-500 text-white hover:bg-red-600 cursor-pointer w-[150px] h-10 shadow-md rounded-lg text-lg items-center justify-center flex">
        Delete
      </div>
    </div>
  );
};

export default CartComp;
