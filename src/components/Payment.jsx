import React from "react";

const Payment = ({ cart }) => {
  const calcTotalPayment = () => {
    return cart.reduce((total, course) => {
      return total + course.option.priceDiscount;
    }, 0);
  };

  return (
    <div className="summary">
      <div className="summary-total-items">
        <span className="total-items"></span> Items in your Bag
      </div>
      <div className="summary-subtotal">
        <div className="subtotal-title">Subtotal</div>
        <div className="subtotal-value final-value" id="basket-subtotal">
          {calcTotalPayment()}
        </div>
        <div className="summary-promo hide">
          <div className="promo-title">Promotion</div>
          <div className="promo-value final-value" id="basket-promo"></div>
        </div>
      </div>
      <div className="summary-delivery">
        <select
          name="delivery-collection"
          className="summary-delivery-selection"
        >
          <option value="0" selected="selected">
            Select Collection or Delivery
          </option>
          <option value="collection">Collection</option>
          <option value="first-className">Royal Mail 1st className</option>
          <option value="second-className">Royal Mail 2nd className</option>
          <option value="signed-for">Royal Mail Special Delivery</option>
        </select>
      </div>
      <div className="summary-total">
        <div className="total-title">Total</div>
        <div className="total-value final-value" id="basket-total">
          {calcTotalPayment()}
        </div>
      </div>
      <div className="summary-checkout">
        <button className="checkout-cta">Go to Secure Checkout</button>
      </div>
    </div>
  );
};

export default Payment;
