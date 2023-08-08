import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div className=" py-1" style={{ background: "rgb(2,0,36)" , background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 82%)"  ,minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white rounded-3 mx-auto p-4"style={{ width:"500px" }}>
        <h3 className="text-center title" style={{ fontSize:"25px" }}>Forgot Password</h3>
        <p className="text-center">
          Please Enter your register email to get reset password mail.
        </p>
        <form action="">
          <CustomInput type="password" label="New Password" id="email" />

          <button
            className="border-0 px-3 py-2 mt-3 text-white fw-bold w-100"
            style={{ background: "rgb(2,0,36)" , background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 82%)" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;