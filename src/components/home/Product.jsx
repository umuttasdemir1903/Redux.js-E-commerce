import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`products/${product.id}`)} className="w-[490px] p-3 mb-5 mx-2 border cursor-pointer rounded-md relative shadow-lg">
    <div className="text-2xl text-white font-bold absolute rounded-md bg-black p-2 top-0 right-0 m-1">$ {product?.price} <span className="text-sm">Dollar</span></div>
      <img className="w-[200px] h-[200px] object-contain m-auto" src={product?.image} />
      <div className="text-[20px] text-center  mt-3">{product?.title}</div>
    </div>
  );
};

export default Product;
