import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/HeaderHome.css";
import { useSelector } from "react-redux";
const HeaderHome = () => {
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderLoginButton = () => {
    if (userLogin) {
      return (
        <NavLink to="/profile" className="nav-link mx-3 text-white">
          Hello ! {userLogin.email}
        </NavLink>
      );
    }
    return (
      <NavLink to="/login" className="nav-link mx-3 text-white">
        Login
      </NavLink>
    );
  };
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <NavLink to="/home">
              <img src="./image/image 3.png" alt="logo" />
            </NavLink>
          </div>
          <div className="header-right">
            <NavLink to="/search" className="item-list">
              <i class="fa fa-search"></i> Search
            </NavLink>
            <NavLink className="icon-cart" to="/carts" />
            <NavLink className="num">(1)</NavLink>
            {/* <NavLink to="/login" className="item-list">
              Login
            </NavLink> */}
            {renderLoginButton()}
            <NavLink to="/register" className="item-list">
              Register
            </NavLink>
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
