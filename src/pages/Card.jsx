import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Card = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "cart");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex justify-end text-2xl font-bold gap-2">
            Total :{" "}
            <span className="font-bold text-green-500">$ {totalAmount}</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-[40px] mt-[5rem]">No items have been added to the basket yet...</div>
      )}
    </div>
  );
};

export default Card;
