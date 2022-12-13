import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//   ACCESS_TOKEN,
//   //   getStore,
//   getStoreJson,
//   saveStore,
//   saveStoreJson,
//   USER_LOGIN,
// } from "../../util/config";
const initialState = {
  userLogin: null,
  userRegister: null,
  sortBy: ["Name", "Price", "Quantity"],
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
  },
});

export const { loginAction, registerAction } = userReducer.actions;

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
    //   saveStoreJson(USER_LOGIN, result.data.content);
    //   saveStore(ACCESS_TOKEN, result.data.content.accessToken);

    //   //Gọi axios lấy dữ liệu api từ token

    //   //Gọi api getprofile
    //   const actionGetProfile = getProfileAction();
    //   dispatch(actionGetProfile);
  };
};
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
