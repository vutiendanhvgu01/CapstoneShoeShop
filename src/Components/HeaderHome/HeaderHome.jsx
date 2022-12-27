import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/HeaderHome.css";
import { useSelector } from "react-redux";
import { ACCESS_TOKEN, USER_LOGIN, removeStore } from "../../util/config";
const HeaderHome = () => {
  const { userLogin } = useSelector((state) => state.userReducer);
  const { totalQuantity } = useSelector((state) => state.productReducer);
  // const handleClick = (e) => {
  //   if (userLogin.email) {
  //     valid = false;
  //   } else {
  //     valid = true;
  //   }
  //   if (valid) {
  //     e.preventDefault();
  //   }
  // };
  const renderLoginButton = () => {
    if (userLogin) {
      return (
        <>
          <NavLink to="/profile" className="nav-link mx-3 text-white">
            Hello ! {userLogin.email}
          </NavLink>
          <NavLink
            to="/register"
            className="item-list"
            onClick={() => {
              removeStore(ACCESS_TOKEN);
              removeStore(USER_LOGIN);
              window.location.reload();
            }}
          >
            Log out
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/login" className="nav-link mx-3 text-white">
          Login
        </NavLink>
        <NavLink to="/register" className="item-list">
          Register
        </NavLink>
      </>
    );
  };
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <NavLink to="">
              <img src="./image/image 3.png" alt="logo" />
            </NavLink>
          </div>
          <div className="header-right">
            <NavLink to="/search" className="item-list">
              <i class="fa fa-search"></i> Search
            </NavLink>
            <NavLink className="icon-cart" to="/carts" />
            <NavLink className="num" to="/carts">
              ({totalQuantity})
            </NavLink>
            {/* <NavLink to="/login" className="item-list">
              Login
            </NavLink> */}
            {renderLoginButton()}
          </div>
        </div>
      </header>
      <section className="nav">
        <nav className="nav-content">
          <NavLink to="" className="nav-item active">
            Home
          </NavLink>
          <NavLink to="/home" className="nav-item">
            Men
          </NavLink>
          <NavLink to="" className="nav-item">
            Woman
          </NavLink>
          <NavLink to="" className="nav-item">
            Kid
          </NavLink>
          <NavLink to="" className="nav-item">
            Sport
          </NavLink>
        </nav>
      </section>
    </div>
  );
};

export default HeaderHome;
