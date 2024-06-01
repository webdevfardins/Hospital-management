import React from "react";
import "./Signup.css";
function SignUp() {
  return (
    <div className="container forms">
    <div className="form login">
      <div className="form-content">
        <h4>
          sign up
          
        </h4>
        <form action="">
        <div className="field input-field">
            <input type="text" placeholder="name" className="input" />


          </div>
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />


          </div>
          <div className="field input-field">
            <input type="password" placeholder="Password" className="input" />
            

          </div>
          <div className="field input-field">
            <input type="password" placeholder=" Confirm  Password" className="input" />
            

          </div>
          <div className="cel">
            <input type="checkbox"className="input" />
            <label>I Accept Terms And Conditions</label>

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

export default SignUp;
