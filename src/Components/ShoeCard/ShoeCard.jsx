import React, { useState } from "react";
import "../../assets/css/ShoeCard.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLike, likeProductApi } from "../../redux/reducers/productReducer";
import axios from "axios";
import { ACCESS_TOKEN, getStore } from "../../util/config";
const ShoeCard = ({ prod}) => {
  const dispatch = useDispatch()
  
 let [like,setLike] = useState(true)

 const renderLike = () => {
  if(like) {
    return <img src= {'...'} alt='like'/>
  }
  return <img src= {'...'} alt='unlike'/>
 }
// console.log(getStore(ACCESS_TOKEN))
//  const likeProductApi = async (prod) => {
//   try {
//     const result = await axios({
//       url:`https://shop.cyberlearn.vn/api/Users/like?productId=${prod.id}`,
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + getStore(ACCESS_TOKEN),
//       },
//       data:prod.id
     
      
//     })
//     console.log(result.content.data)

//   } catch (e) {
//     console.log(e)
//   }
 
  
//  }
//  likeProductApi(prod)

 console.log(like)
  return (
    <>
      <div className="product-item">

        <button className="btn btn-like" onClick={() => {
        setLike(!like)
        if(like) {
         
        }
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
          <NavLink href={`/detail/${prod.id}`} className="btn-buy">
            Buy now
          </NavLink>
          <NavLink href="#" className="btn-price">
            {prod.price}$
          </NavLink>
        </div>
      </div>

    </>

  );
};

export default ShoeCard;
