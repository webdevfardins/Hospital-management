import React from "react";

function AddPatient() {
  return (
    <div>
      <input type="file" name="" id="" />
      <br />
      <span>Last Name</span>
      <input type="text" name="" placeholder="lastname" id="" />
      <br />
      <span>First Name</span>
      <input type="text" name="" placeholder="firstname" id="" />
      <br />
      <span>Middile Name</span>
      <input type="text" name="" placeholder="middlename" id="" />
      <br />
      <span> Date Of Birth</span>
      <input type="date" name="" id="" />
      <br />
      <span>Location</span>
      <input type="text" name="" placeholder="location" id="" /> <br />
      <span>Place Of Service</span>
      <input type="text" name="" id="" />
      <br />
      <span>Room </span>
      <input type="text" name="" id="" />
      <br />
      <span>Age</span>
      <input type="number" name="" id="" />
      <br />
      <span>Gender</span>
      <br />
      <input type="radio" />  <label for="male">Male</label>
      <input type="radio" />  <label for="female">Female</label>
      <input type="radio" />  <label for="other">Other</label>
      <br />
      <span>Chart No.</span>
      <input type="text" name="" id="" />
      <br />
      <span>Owning Physician</span>
      <input type="text" />
      <br />
      <span> Consulting Providers</span>
      <input type="text" name="" id="" />
      <br />
      <span>Notes</span>
      <input type="text" />
    </div>
  );
}

export default AddPatient;
