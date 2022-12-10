import React from "react";
import "../../assets/css/Register.css";
const Register = () => {
  return (
    <div>
      <div className="container title">
        <h1>Register</h1>
      </div>
      <div className="pt-5">
        <form className="container">
          <div className="row">
            <div className="col-6">
              <div class="normal-input">
                <p>Email</p>
                <input type="text" name="email" placeholder="email" />
              </div>
            </div>
            <div className="col-6">
              <div class="normal-input">
                <p>Name</p>
                <input type="text" name="name" placeholder="name" />
              </div>
            </div>
            <div className="col-6">
              <div class="normal-input">
                <p>Password</p>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
            <div className="col-6">
              <div class="normal-input">
                <p>Phone</p>
                <input type="number" name="phone" placeholder="phone" />
              </div>
            </div>
            <div className="col-6">
              <div class="normal-input">
                <p>Password confirm</p>
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="password confirm"
                />
              </div>
            </div>
            <div className="col-6">
              <div class="gender row pt-5">
                <div className="col-2">
                  <p>Gender</p>
                </div>
                <div class="male col-2 pt-md-3">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    checked="checked"
                  />
                  <p>Male</p>
                </div>
                <div class="female col-2 pt-md-3">
                  <input type="radio" name="gender" id="female" />
                  <p>Female</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-3 form-footer">
            <button type="submit" class="btn-submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
