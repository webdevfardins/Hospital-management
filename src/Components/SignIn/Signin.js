import React from "react";

function Signin() {
  return (
    <div className="container">
      <div className="box1">
        <div className="box2">
        
            <h4>Sign Up</h4>
        

          <form className="form">
            <input type="text" name="" placeholder="Email" className="input  input-box" />
            <br />
            <input type="text" name="" placeholder="Password" className="input  input-box" />
            <br />

            <div id="btn">
              <button type="button" id="btn1">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
