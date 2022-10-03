import React, { useState } from "react";
import CartItem from "./CartItem";
import Payment from "./Payment";

export default function CartComponents({ data }) {
  const [cart, setCart] = useState([]);

  const addCart = (selectedCourse) => {
    const existed = cart.find(
      (cart) => cart.courseName === selectedCourse.courseName
    );
    if (!existed) {
      setCart([...cart, selectedCourse]);
    } else {
      setCart((prevCart) => {
        return prevCart.filter(
          (cart) => cart.courseName !== selectedCourse.courseName
        );
      });
    }
  };
  return (
    <div>
      <div className="basket">
        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>

        {data.map((course, index) => {
          return (
            <CartItem
              key={course.name + index}
              course={course}
              addCart={addCart}
            />
          );
        })}
      </div>
      <aside>
        <Payment cart={cart} />
      </aside>
    </div>
  );
}
