import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { CartContext } from "../Context/CartContext";
import { Helmet } from "react-helmet";
export default function ProductDetails() {
  let params = useParams();
  let { addtocart,setnumOfCartItems } = useContext(CartContext);

  function getProductDetails() {
    
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${params.id}`
    );
  }

  let { data } = useQuery(
    "productDetails",
    getProductDetails
  );

  async function addProduct(productId) {
    let response = await addtocart(productId);
    if (response.data.status === "success") {
      setnumOfCartItems(response.data.numOfCartItems)
      toast.success("The product is added", {
        duration: 3000,
        position: "top-center",
        className: "text-white bg-main",
      });
    } else {
      toast.error("This is an error!", {
        duration: 3000,
        position: "top-center",
        className: "text-white bg-danger",
      });
    }
  }

  return (
    <>
    <Helmet>
        <title>ProductDetails</title>
        <meta name="description" content="User FreshCart Website" />
      </Helmet>
      <div className="container marginTop">
        {data?.data.data ? (
          <div className="row py-3 align-items-center">
            <div className="col-md-4">
              <img
                src={data?.data.data.imageCover}
                alt={data?.data.data.title}
                className="w-100"
              />
            </div>
            <div className="col-md-8 ">
              <h1 className="h5">{data?.data.data.title}</h1>
              <p>{data?.data.data.description}</p>
              <h6 className=" text-black">{data?.data.data.category.name}</h6>
              <h6 className=" text-black">
                Price : {data?.data.data.price} EGP
              </h6>
              <div className="d-flex justify-content-between">
                <span>ratingsQuantity : {data?.data.data.ratingsQuantity}</span>
                <span>
                  <i className=" fas fa-star rating-color"></i>
                </span>
              </div>
              <button
                onClick={() => addProduct(data?.data.data.id)}
                className="btn text-white bg-main w-100 mt-2"
              >
                add to cart
              </button>
            </div>
          </div>
        ) : (
          <section className=" d-flex justify-content-center align-items-center">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </section>
        )}
      </div>
    </>
  );
}
//
