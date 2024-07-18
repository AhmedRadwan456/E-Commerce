import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { RotatingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Categories() {
  async function getCategoryProduct() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  let { data} = useQuery("getCategoryProduct", getCategoryProduct);

  return (
    <>
     <Helmet>
        <title>Categories</title>
        <meta name="description" content="User FreshCart Website" />
      </Helmet>
      <div className="container  my-5">
        <h1 className="mb-3 marginTop">Our Categories</h1>
        <div className="row g-4">
          {data?.data.data ? (
            <>
              {data?.data.data.map((category) => {
                return (
                  <div key={category._id} className=" col-md-4 col-lg-3 ">
                    <div className="rounded-2 cursor-pointer  product shadow1 overflow-hidden">
                      {" "}
                      <img
                        className="w-100"
                        height={350}
                        src={category.image}
                        alt={category.name}
                      />
                      <h2 className="h5 fw-bold text-center p-3">{category.name}</h2>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <section className=" d-flex justify-content-center align-items-center">
              {" "}
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
      </div>
    </>
  );
}
