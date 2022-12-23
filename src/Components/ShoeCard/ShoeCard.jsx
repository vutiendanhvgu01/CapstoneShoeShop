import React, { useState } from "react";
import "../../assets/css/ShoeCard.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLike, likeProductApi } from "../../redux/reducers/productReducer";
import axios from "axios";
import { ACCESS_TOKEN, getStore } from "../../util/config";
const ShoeCard = ({ prod }) => {
  const dispatch = useDispatch()
  let [like, setLike] = useState(false)
  let access = getStore(ACCESS_TOKEN)
  console.log(access);
  let likeProduct = async (id) => {
    let result = await axios({
      url: `https://shop.cyberlearn.vn/api/Users/like?productId=${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${access}`
      }
    })
    console.log(result.data.content)

  }
  let unLikeProduct = async (id) => {
    let result = await axios({
      url: `https://shop.cyberlearn.vn/api/Users/unlike?productId=${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${access}`
      }
    })
    console.log(result.data.content)

  }
  const renderLike = () => {
    if (like) {
     
      return <img src={'...'} alt='like' />
    }
   
    return <img src={'...'} alt='unlike' />
  }


  console.log(like)
  return (
    <>
      <div className="product-item">

        <button className="btn btn-like" onClick={() => {
          setLike(!like)
          if (like) {
            likeProduct(prod.id)
          } else { unLikeProduct(prod.id)}

        }} >
          {renderLike()}
        </button>
        <NavLink to={`/detail/${prod.id}`}>
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
        </NavLink>
        <div className="product-btn">
          <NavLink href="./detail.html?id=${product.id}" className="btn-buy">
            Buy now
          </NavLink>
          <NavLink to={`/detail/${prod.id}`} className="btn-price">
            {prod.price}$
          </NavLink>
        </div>
      </div>

    </>

  );
};

export default ShoeCard;
