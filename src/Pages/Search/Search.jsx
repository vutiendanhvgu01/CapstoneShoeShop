import axios from "axios";
import React from "react";
import { ACCESS_TOKEN, getStore } from "../../util/config";

const Search = () => {
  let access = getStore(ACCESS_TOKEN)
  console.log(access);
  let callApi = async (id) => {
    let result = await axios({
      url:`https://shop.cyberlearn.vn/api/Users/like?productId=${id}`,
      method:"get",
      headers:{
        Authorization: `Bearer ${access}`
      }
    })
    console.log(result.data.content)
   
  }
  callApi(12)

  return <>
  hello
  </>;
};

export default Search;
