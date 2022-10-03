import React, { useState } from "react";

export default function CartItem({ course, addCart }) {
  const [selection, setSelection] = useState(course.opt[0]);
  const [checkbox, setCheckbox] = useState(false);
  const handleSelect = (event) => {
    let { value } = event.target;

    course.opt.forEach((option) => {
      if (option.value === value * 1) {
        setSelection(option);
      }
    });
    setCheckbox(false);
    console.log(checkbox);

    if (checkbox) {
      addCart({
        courseName: course.name,
        option: { ...selection },
      });
    }
  };

  const handleSelectCourse = () => {
    addCart({
      courseName: course.name,
      option: { ...selection },
    });
    setCheckbox(!checkbox);
  };

  return (
    <div className="basket-product">
      <div className="item" style={{ display: "flex" }}>
        <div className="checkbox">
          <input
            type="checkbox"
            id={course.name}
            name={course.name}
            checked={checkbox}
            onChange={handleSelectCourse}
          ></input>
        </div>
        <div className="product-image">
          <img
            src={course.image}
            alt="image"
            className="product-frame"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        <div className="product-details">
          <h1>{course.name}</h1>
          <p>
            <strong>{selection.name}</strong>
          </p>
          <select
            name={course.id}
            id={course.id}
            className="quantity-field"
            value={selection.value}
            onChange={(event) => handleSelect(event)}
          >
            {course.opt.map((sub, index) => (
              <option key={sub.price + index} value={sub.value}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="price">
        {selection.price}
        <br></br>({selection.percentDiscount}% off)
        <br></br>£{selection.priceDiscount}
      </div>

      <div>- £{selection.price - selection.priceDiscount}</div>
    </div>
  );
}
