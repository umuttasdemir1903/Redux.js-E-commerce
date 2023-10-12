import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/Detail/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { ProductDetail, ProductDetailStatus } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch]);

  return (
    <div>
        {
            ProductDetailStatus == 'LOADING' ? <Loading /> : <DetailComp ProductDetail={ProductDetail}/>
        }
        </div>
  )
};

export default Detail;
