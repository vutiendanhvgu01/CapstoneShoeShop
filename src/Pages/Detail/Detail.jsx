import React from "react";
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
  useEffect(() => {
    const actionAsync = getProductDetailApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);
  // useEffect(() => {
  //   handleCart(productDetail.id);
  // });
  // const handleCart = (id) => {
  //   const action = addCartProduct(id);
  //   dispatch(action);
  // };
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
              <button className="plus">+</button>
              <input type="text" value="1" class="input" id="quantity" />
              <button className="minus">-</button>
            </div>
            <div>
              <button
                className="btn-add-cart"
                // onClick={handleCart(productDetail.id)}
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
