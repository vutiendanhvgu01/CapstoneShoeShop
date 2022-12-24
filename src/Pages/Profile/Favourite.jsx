import axios from 'axios'
import React, { useEffect } from 'react'
import { ACCESS_TOKEN, getStore } from '../../util/config'

const Favourite = () => {

  const renderFavProduct = async () => {
    let result = await axios({
      url:`https://shop.cyberlearn.vn/api/Users/getproductfavorite`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`
      }
    })
    console.log(result.data.content.productsFavorite)
  }

  useEffect(()=> {
    renderFavProduct()
  },[])


  return (
    <>

    </>
  )
}

export default Favourite