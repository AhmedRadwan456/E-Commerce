import React from "react";
import FeatureProduct from "../FeatureProduct/FeatureProduct.jsx";
import CategorySlider from "../CategorySlider/CategorySlider.jsx";
import MainSlider from "../MainSlider/MainSlider.jsx";
import Helmet from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>FreshCart</title>
        <meta name="description" content="User FreshCart Website" />
      </Helmet>
      <div className="marginTop">
      <MainSlider></MainSlider>
      <CategorySlider />
      <FeatureProduct />
      </div>
    </>
  );
}
