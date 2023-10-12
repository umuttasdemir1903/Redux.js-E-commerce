import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ ProductDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < ProductDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: ProductDetail?.id,
        title: ProductDetail?.title,
        image: ProductDetail?.image,
        price: ProductDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-7 my-10">
      <img
        className="w-full md:w-[500px] h-[500px] object-contain "
        src={ProductDetail?.image}
        alt={ProductDetail?.title}
      />
      <div className="pl-5">
        <div className="pl- text-[30px] font-bold">{ProductDetail?.title}</div>
        <p className="font-bold text-xl my-3 underline">Description</p>
        <div className="my-3  text-[15px] font-light">
          {ProductDetail?.description}
        </div>
        <div className="text-lg text-red-500 my-2">
          Rating : {ProductDetail?.rating?.rate}
        </div>
        <div className="text-lg text-red-500 my-2">
          Count : {ProductDetail?.rating?.count}
        </div>
        <div className="text-[30px] font-bold">$ {ProductDetail?.price}</div>
        <div className="flex items-center gap-5 my-4 cursor-pointer">
          <div onClick={decrement} className="text-3xl border py-1 px-4 shadow">
            -
          </div>
          <input
            className="w-5 text-3xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-3xl border py-1 px-4 shadow">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-200px text-2xl rounded cursor-pointer p-2 my-3  hw-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300 duration-200"
        >
          Add to basket
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
