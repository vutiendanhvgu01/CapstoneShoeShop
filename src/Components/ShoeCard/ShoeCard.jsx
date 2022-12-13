import React from "react";
import "../../assets/css/ShoeCard.css";
import { NavLink } from "react-router-dom";
const ShoeCard = ({ prod }) => {
  return (
    <NavLink to={`/detail/${prod.id}`}>
      <div className="product-item">
        <div className="product-img">
          <img className="w-100" src={prod.image} />
        </div>
        <div className="product-desc">
          <h5>{prod.name}</h5>
          <p>
            {prod.description?.length > 50
              ? prod.description.substr(0, 50) + " ..."
              : prod.description}
          </p>
        </div>
        <div className="product-btn">
          <NavLink href={`/detail/${prod.id}`} className="btn-buy">
            Buy now
          </NavLink>
          <NavLink href="#" className="btn-price">
            {prod.price}$
          </NavLink>
        </div>
      </div>
    </NavLink>
  );
};

export default ShoeCard;
