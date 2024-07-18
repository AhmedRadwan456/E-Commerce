import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";

export let CartContext = createContext();

let headers = { token: localStorage.getItem("userToken") };

export default function CartContextProvider(props) {
  let [cartId, setcartId] = useState(null);
  const [numOfCartItems, setnumOfCartItems] = useState(null);

  function addtocart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function getLoogedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function removeCartItem(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function clearCartItem() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function updateProductQuantity(id, count) {
    if (count < 1) {
      return axios
        .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
          headers: headers,
        })
        .then((response) => response)
        .catch((error) => error);
    } else {
      return axios
        .put(
          `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
          { count },
          { headers }
        )
        .then((response) => response)
        .catch((error) => error);
    }
  }

  async function getCart() {
    let { data } = await getLoogedUserCart();
    if (data?.status === "success") {
      setnumOfCartItems(data?.numOfCartItems);
    }
  }

  useEffect(() => {
    if (cartId) {
      getCart();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        addtocart,
        getLoogedUserCart,
        removeCartItem,
        updateProductQuantity,
        clearCartItem,
        cartId,
        numOfCartItems,
        setnumOfCartItems,
        setcartId,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
