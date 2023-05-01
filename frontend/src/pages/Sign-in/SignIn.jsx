import React from "react";
import GoogleIcon from "../../Assets/GoogleIcon";

const SignIn = () => {
  return (
    <div className="w-screen bg-gradient-135 from-darkblue  via-greyblue  to-darkpurple  h-screen flex flex-col  items-center ">
      <div className="font-sand font-semibold text-2xl p-11 text-white mt-40">
        {/* Sign in text */}
        Sign In
      </div>

      <div className="mt-60 flex justify-center color-white ">
        {/* Sign in button */}
        <button className="flex flex-wrap justify-around items-center p-1 border rounded border-white w-52 h-13 ">
          <GoogleIcon />
          <text className=" text-white font-sand ml-1">
            Sign in with Google
          </text>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
