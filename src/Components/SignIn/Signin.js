import React from "react";
import "./signin.css"
function Signin() {
  return (
    <div className="container forms">
      <div className="form login">
        <div className="form-content">
          
          <h4>
            sign in
          </h4>
          
          <form action="">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />


            </div>
            <div className="field input-field">
              <input type="password" placeholder="Password" className="input" />
              

            </div>
            <div className="field button-field">
              <button id="btn">submit</button>
              

            </div>
          </form>
        </div>
      </div>
      
      </div>
    
  );
}

export default Signin;
