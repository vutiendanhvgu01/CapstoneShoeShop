import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "product1",
      image: "https://i.pravatar.cc?u=1",
      price: 1000,
    },
    {
      id: 2,
      name: "product2",
      image: "https://i.pravatar.cc?u=2",
      price: 2000,
    },
  ],
  productDetail: {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    feature: false,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: ["36", "37", "38", "39", "40", "41", "42"],
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    categories: [
      {
        id: "ADIDAS",
        category: "ADIDAS",
      },
      {
        id: "MEN",
        category: "MEN",
      },
      {
        id: "WOMEN",
        category: "WOMEN",
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        feature: false,
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
      },
      {
        id: 3,
        name: "Adidas Prophere Customize",
        alias: "adidas-prophere-customize",
        feature: false,
        price: 375,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
      },
      {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        feature: false,
        price: 550,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
      },
    ],
  },
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getAllProductApi: (state, action) => {
      state.arrProduct = action.payload;
    },
    getDetailProductAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export default productReducer.reducer;
export const { getAllProductApi, getDetailProductAction } =
  productReducer.actions;

export const getProductApi = () => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/product",
      method: "GET",
    });
    const action = getAllProductApi(result.data.content);
    dispatch(action);
  };
};
export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/product/getbyid?id=${id}`,
      method: "GET",
    });
    const action = getDetailProductAction(result.data.content);
    dispatch(action);
  };
};
