import React from "react";
import { Link } from "react-router";

const ForgetPassword = () => {
  return (
    <div className="flex lg:ml-25  flex-col">
      <form className="space-y-2 rounded-box">
        <h1 className="text-4xl font-bold">Forgot Password</h1>
        <p className="text-base w-4/5">
          Enter your email address and we’ll send you a reset link.
        </p>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input outline-0"
            placeholder="Enter email"
          />
        </fieldset>
        <button
          className="btn md:w-xs btn-neutral mt-4"
        >
          Send
        </button>
      </form>
      <h1 className="py-2">
        Remember your password? please
        <Link
          className="text-fuchsia-600 ml-2 font-semibold underline"
          to={"/login"}
        >
          LogIn
        </Link>
      </h1>
    </div>
  );
};

export default ForgetPassword;
