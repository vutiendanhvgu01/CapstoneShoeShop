import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../../index";
import {
  ACCESS_TOKEN,
  //   //   getStore,
  //   getStoreJson,
  saveStore,
  saveStoreJson,
  getStoreJson,
  USER_LOGIN,
  http,
} from "../../util/config";
const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
  userRegister: null,
  userLoginResult: null,
  sortBy: ["Name", "Price", "Quantity"],
  valid: true,
  facebookToken: "",
  userProfile: null,
  arrFavouriteProduct: []
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    registerAction: (state, action) => {
      state.userRegister = action.payload;
    },
    getProfileAsyncApi: (state, action) => {
      state.userLogin = action.payload;
    },
    getProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    arrFavouriteProduct: (state, action) => {
      state.arrFavouriteProduct  = action.payload;
  },
}
});

export const { loginAction, registerAction, getProfileAsyncApi,getProfile } =
  userReducer.actions;

export default userReducer.reducer;


export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "post",
      data: userLogin,
    });
    console.log("obDangNhap", result.data.content);
    //Cập nhật cho reducer
    const action = loginAction(result.data.content);
    dispatch(action);
    //Lưu localstorage
    saveStoreJson(USER_LOGIN, result.data.content);
    saveStore(ACCESS_TOKEN, result.data.content.accessToken);
    history.push("/profile");
    //   //Gọi axios lấy dữ liệu api từ token

    //   //Gọi api getprofile
      const actionGetProfile = getProfileApi();
      dispatch(actionGetProfile);
  };
};

export const getProfileApi = () => {
  return async dispatch => {
    const result = await http.post(`/api/Users/getProfile`)
    const action = getProfile(result.data.content)
    dispatch(action)

  }
}

export const registerApi = (userRegister) => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: userRegister,
      headers: {
        "Content-Type": "application/json-patch+json",
      },
    });
    console.log("Dangky", result.data.content);
    const action = registerAction(result.data.content);
    dispatch(action);
  };
};
