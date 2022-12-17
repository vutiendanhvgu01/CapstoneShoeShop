import React, { useState } from "react";
import Favourite from "./Favourite";
import OrderHistory from "./OrderHistory";

const Profile = () => {
  const [component, setComponent] = useState(true)
  let renderProfileFooter = () => {
    if (component) {
      return <OrderHistory/>
    }
    return <Favourite />
  }


  return <>
    <div className="container-fluid">
      <div className="profile-container">
        <h3>Profile</h3>
        <div className="profile-content row">
          <div className="col-2">
            <div className="profile-image">
              <img src="../../assets/image/image 3.png" alt="..." />
            </div>
          </div>
          <div className="col-5">
            <div className="profile-left">
              <div className="form-group">
                <p>Email</p>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <p>Phone</p>
                <input type="phone" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="profile-right">
              <div className="form-group">
                <p>Name</p>
                <input type="name" className="form-control" />
              </div>
              <div className="form-group">
                <p>Password</p>
                <input type="phone" className="form-control" />
              </div>
              <div class="gender row pt-5">
                <div className="col-2">
                  <p>Gender:</p>
                </div>
                <div class="male col-2 pt-md-3">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label for='male'>Male</label>
                </div>
                <div class="female col-2 pt-md-3">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    checked={true}
                  />
                  <label for='female'>Female</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="profile-footer">
        <button className="btn" onClick={() => {
          setComponent(true)
        }}>Order history</button>
        <button className="btn" onClick={() => {
          setComponent(false)
        }}>Favourite</button>


        {renderProfileFooter()}
      </div>
    </div>


  </>;
};

export default Profile;
