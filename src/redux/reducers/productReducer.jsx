import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http, saveStoreJson } from "../../util/config";
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
  cartProducts: [],
  totalQuantity: 0,
  arrFavouriteProduct: []
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
    addCartProduct: (state, action) => {
      const productCart = state.cartProducts.find(
        (prod) => prod.id == action.payload.id
      );

      if (productCart) {
        productCart.quantity += 1;
      } else {
        state.cartProducts.push(action.payload);
      }

      state.totalQuantity = state.cartProducts.reduce((td, prod) => {
        return td + prod.quantity;
      }, 0);
      localStorage.setItem("cartProduct", JSON.stringify(state.cartProducts));
    },
    deleteCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );

      state.totalQuantity = state.cartProducts.reduce((td, prod) => {
        return td + prod.quantity;
      }, 0);
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const cartProduct = state.cartProducts.find((item) => item.id === id);
      if (cartProduct) {
        cartProduct.quantity += quantity;
        if (cartProduct.quantity < 1) {
          alert("Số lượng nhỏ hơn 1");
          cartProduct.quantity -= quantity;
        }
      }
    },
    arrFavouriteProduct: (state, action) => {
      state.arrFavouriteProduct  = action.payload;
    },
  
  },
});

export default productReducer.reducer;
export const {
  getAllProductApi,
  getDetailProductAction,
  addCartProduct,
  deleteCartProduct,
  changeQuantity,
  changeLike
} = productReducer.actions;

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

export const likeProductApi = (productId) => {
  return async (dispatch) => {
    const result = await http.get(`
    /api/Users/like`,productId)
    console.log(result.data.content)
  }
  
}
