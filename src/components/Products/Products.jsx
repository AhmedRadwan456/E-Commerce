import React from "react";
import FeatureProduct from "../FeatureProduct/FeatureProduct";
import { Helmet } from "react-helmet";

export default function Products() {
  return (
    <>
     <Helmet>
        <title>Products</title>
        <meta name="description" content="User FreshCart Website" />
      </Helmet>
      <div className="container marginTop">
        <FeatureProduct />
      </div>
    </>
  );
}
