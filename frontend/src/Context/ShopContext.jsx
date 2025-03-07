import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAll_product] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAll_product(data.products);
      });

    if (localStorage.getItem("auth-token")) {
      fetch(`${import.meta.env.VITE_API_URL}/getcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      console.error("Auth token is missing");
      // Kullanıcıyı login sayfasına yönlendirebilirsiniz
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/addtocart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ product_id: itemId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        } else {
          console.error("Failed to add to cart:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_product.find((p) => p.id === Number(item));
        if (product) {
          totalAmount += product.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch(`${import.meta.env.VITE_API_URL}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
