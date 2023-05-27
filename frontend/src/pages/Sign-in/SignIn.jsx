import React from "react";
import { GoogleIcon } from "../../Assets/GoogleIcon";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-gradient-135 from-darkblue via-greyblue to-darkpurple ">
      <div>{/* <Header> */}</div>

      <div className="mt-40 text-2xl font-semibold text-white font-sand p-11">
        {/* Sign in text */}
        Sign In
      </div>

      <div className="flex justify-center mt-60 color-white ">
        {/* Sign in button */}
        <button className="flex flex-wrap items-center justify-around p-1 border border-white rounded w-52 h-13 ">
          <GoogleIcon />
          <text className="ml-1 text-white font-sand">Sign in with Google</text>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
