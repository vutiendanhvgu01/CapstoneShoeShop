import React, { useState } from "react";
import "../../assets/css/Detail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetailApi } from "../../redux/reducers/productReducer";
import ShoeCard from "../../Components/ShoeCard/ShoeCard";
import { addCartProduct } from "../../redux/reducers/productReducer";

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();
  let [number, setNumber] = useState(1);
  console.log(params.id);
  useEffect(() => {
    const actionAsync = getProductDetailApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);

  const handleCart = (item) => {
    const productCart = { ...item, quantity: 1 };
    const action = addCartProduct(productCart);
    dispatch(action);
  };

  return (
    <div>
      <div className="row product-detail">
        <div className="col-5 product-img">
          <div className="img-trainer">
            <img src={productDetail.image} alt="logo" />
          </div>
        </div>
        <div className="col-7 product-describe">
          <div className="describe">
            <h1>{productDetail.name}</h1>
            <p>{productDetail.description}</p>
            <h3>Available size</h3>
            <div className="size">
              {productDetail.size?.map((item, index) => {
                return (
                  <button className="btn-size" key={index}>
                    {item}
                  </button>
                );
              })}
            </div>
            <h2>{productDetail.price}$</h2>
            <div className="btn-quantity">
              <button
                className="plus"
                onClick={() => {
                  let newNum = number + 1;
                  setNumber(newNum);
                }}
              >
                +
              </button>
              <input type="number" value={number} class="input" id="quantity" />
              <button
                className="minus"
                onClick={() => {
                  if (number > 1) {
                    let newNum = number - 1;
                    setNumber(newNum);
                  } else {
                    return;
                  }
                }}
              >
                -
              </button>
            </div>
            <div>
              <button
                className="btn-add-cart"
                onClick={() => {
                  handleCart(productDetail);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h1 className="related-prod text-center">-Related Product-</h1>
        <div className="row">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <ShoeCard prod={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
