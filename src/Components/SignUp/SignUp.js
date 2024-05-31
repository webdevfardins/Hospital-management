import React from "react";
import "./Signup.css";
function SignUp() {
  return (
    <div className="container">
      <div className="box1">
        <div className="box">
          <div>
            
              <h4>Sign Up</h4>
            
            <form className="form">
              <input type="text" name="" placeholder="Name" className="input" />
              <br />
              <input type="text" name="" placeholder="Email" className="input" />
              <br />
              <input type="text" name="" placeholder="Password" className="input" />
              <br />
              <input
                type="text"
                name=""
                placeholder="Confirm Password"
                className="input"
              />
              <br />

              <div className="cel">
                <input type="checkbox" name="" id="check" />
                <label>I Accept Terms And Conditions</label>
                <br />
              </div>
              <div id="btn">
                <button type="button" id="btn1">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
