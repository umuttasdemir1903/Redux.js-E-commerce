import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryProduct,
  getCategoryProducts,
  getProducts,
} from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };

  console.log(sort, "sort");
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
    dispatch(getProducts());
  }, [dispatch, category]);
  return (
    <div>
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap md:justify-center">
            {currentItems
              ?.sort((a, b) =>
                sort == "dec"
                  ? a.price - b.price
                  : sort == "inc"
                  ? b.price - a.price
                  : ""
              )
              .map((product, i) => (
                <Product key={i} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
