import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Login.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
import FacebookLogin from "react-facebook-login";
const Login = () => {
  const responseFacebook = (res) => {
    console.log(res);
  };
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank!")
        .email("Email is invalid!"),
      password: yup.string().required("Password cannot be blank!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = loginApi(values);
      dispatch(action);
    },
  });
  return (
    <div>
      <div className="login-title container">
        <h1>Login</h1>
      </div>
      <div className="pt-5">
        <form className="container" onSubmit={form.handleSubmit}>
          <div className="form-content form-group">
            <p>Email</p>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="email"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.email && (
              <p className="text-danger">{form.errors.email}</p>
            )}
          </div>
          <div className="form-content form-group">
            <p>Password</p>
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="password"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.passowrd && (
              <p className="text-danger">{form.errors.password}</p>
            )}
          </div>
          <div className="row form-content">
            <div className="col-5">
              <div className="register">
                <NavLink to="/register">Register now ?</NavLink>
              </div>
            </div>
            <div className="col-2">
              <div className="login form-group">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="form-content pt-3">
            <button className="btn-fb">
              <div className="logo-fb">
                <i class="fab fa-facebook"></i>
              </div>
              <span>Continnue with Facebook</span>
            </button>
          </div>
          <div class="form-control">
            <FacebookLogin
              appId="5729721340457529"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="btn btn-primary"
              icon="fa-facebook"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
