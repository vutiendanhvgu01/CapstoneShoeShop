import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { renderFavProduct } from "../../redux/reducers/productReducer";
import { getProfileApi } from "../../redux/reducers/userReducer";
import Favourite from "./Favourite";
import OrderHistory from "./OrderHistory";
import { useFormik } from "formik";
import * as yup from "yup";
import UpDateProfile from "./UpDateProfile";
const Profile = () => {
  const [component, setComponent] = useState(true);
  const { userProfile } = useSelector((state) => state.userReducer);
  const [update, setUpdate] = useState(true);
  // const { arrFavouriteProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfile === null) {
      const profile = getProfileApi();
      dispatch(profile);
      console.log(userProfile);
    }
  }, []);

  let renderProfileFooter = () => {
    if (component) {
      return <OrderHistory />;
    }
    return <Favourite />;
  };
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: true,
      phone:''
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank!")
        .email("Email is invalid!"),
      password: yup.string().required("Password cannot be blank!"),
    }), 
    onSubmit: (values) =>{
      console.log(values);
    }
  });
  return (
    <>
      <div className="container-fluid">
        <div className="profile-container">
          <h3>Profile</h3>
          <div className="profile-content row">
            <div className="col-lg-2 col-md-2 col-xl-2 col-xs-2">
              <div className="profile-image">
                <img src={userProfile?.avatar} alt="..." className="w-100" />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-xl-5 col-xs-5">
              <div className="profile-left">
                <div className="form-group">
                  <p>Email</p>
                  <input
                    type="email"
                    name='email'
                    className="form-control"
                    value={userProfile?.email}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <p>Phone</p>
                  <input
                  name='phone'
                    type="phone"
                    className="form-control"
                    value={userProfile?.phone}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-xl-5 col-xs-5">
              <div className="profile-right">
                <div className="form-group">
                  <p>Name</p>
                  <input
                  name='name'
                    type="name"
                    className="form-control"
                    value={userProfile?.name}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <p>Password</p>
                  <input
                    type="phone"
                    className="form-control"
                    value='********'
                    disabled={true}
                  />
                </div>
                <div class="gender row pt-5">
                  <div className="col-lg-2 col-md-2 col-xl-2 col-xs-2">
                    <p>Gender:</p>
                  </div>
                  <div class="male col-lg-2 col-md-2 col-xl-2 col-xs-2 pt-md-3">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      checked={userProfile?.gender}
                      disabled={!userProfile?.gender}
                    />
                    <label for="male">Male</label>
                  </div>
                  <div class="female col-lg-2 col-md-2 col-xl-2 col-xs-2 pt-md-3">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      checked={!userProfile?.gender}
                      disabled={userProfile?.gender}
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-success"
                data-bs-toggle="modal" data-bs-target="#modalId"
              
              >
                Update Profile
              </button>
              <UpDateProfile/>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="profile-footer">
          <button
            className="btn"
            onClick={() => {
              setComponent(true);
            }}
          >
            Order history
          </button>
          <button
            className="btn"
            onClick={() => {
              setComponent(false);
            }}
          >
            Favourite
          </button>

          {renderProfileFooter()}
        </div>
      </div>
    </>
  );
};

export default Profile;
