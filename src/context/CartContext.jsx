import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ============================
  //        ADD TO CART
  // ============================
  const addToCart = (product) => {
    const uniqueKey = `${product.id}-${product.variantId}`;

    const exists = cart.find((item) => item.key === uniqueKey);

    if (exists) {
      // evitar exceder el stock
      if (exists.quantity + 1 > product.stock) return;

      setCart(
        cart.map((item) =>
          item.key === uniqueKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          key: uniqueKey, // clave única por variante
          quantity: 1,
        },
      ]);
    }
  };

  // ============================
  //     REMOVE FROM CART
  // ============================
  const removeFromCart = (key) => {
    setCart(cart.filter((item) => item.key !== key));
  };

  // ============================
  //     INCREASE QUANTITY
  // ============================
  const increase = (key) => {
    setCart(
      cart.map((item) =>
        item.key === key
          ? item.quantity < item.stock
            ? { ...item, quantity: item.quantity + 1 }
            : item
          : item
      )
    );
  };

  // ============================
  //     DECREASE QUANTITY
  // ============================
  const decrease = (key) => {
    setCart(
      cart.map((item) =>
        item.key === key
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // ============================
  //         TOTAL
  // ============================
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
