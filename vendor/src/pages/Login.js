import React from "react";
import CustomInput from "../components/CustomInput";
import {Link} from "react-router-dom";


const Login = () => {
  return (
    <div className=" py-1" style={{ background: "rgb(2,0,36)" , background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 82%)"  ,minHeight:"100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white rounded-3 mx-auto p-4"style={{ width:"500px" }}>
        <h3 className="text-center title" style={{ fontSize:"25px" }}>Login</h3>
        <p className="text-center">Login to your account to continue  </p>
        <form action="">
          <CustomInput  type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />
          <div className="mb-3 text-end">
            <Link to="forgot-password">Forgot Password</Link>
          </div>
          <Link to="/admin"
            className="border-0 px-3 mt-3 py-2 text-white fw-bold w-100 text-center text-decoration-none"
            style={{ background: "rgb(2,0,36)" , background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 82%)"  }}
            type="submit"
          >Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;