import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiTwotoneEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';
import { toast } from 'react-toastify';

const LogIn = () => {
  const [eye, setEye] = useState(true);
  const { userLogIn, userSignInGoogle } = useContext(AuthContext);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleLogIn = (data) => {
   
    userLogIn(data.email, data.password)
      .then(() => {
        toast.success("Your Account LogIn Successfull.")
      })
      .catch(err => toast.error(err.message));
    
  }

  const handleLogInGoogle = () => {
    userSignInGoogle()
      .then(() => {
        toast.success("Your Account LogIn Successfull.");
      })
      .catch((err) => toast.error(err.message));
  }

    return (
      <div className="flex lg:ml-25  flex-col">
        <form
          onSubmit={handleSubmit(handleLogIn)}
          className="space-y-2 rounded-box"
        >
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-base">LogIn with ZapShift</p>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input outline-0"
              placeholder="Enter email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required!</p>
            )}

            <label className="label">Password</label>
            <label className="input outline-0">
              <input
                type={eye ? "password" : "text"}
                {...register("password", {
                  required: true,
                })}
                placeholder="Enter password"
              />

              <span
                className="cursor-pointer text-base"
                onClick={() => setEye(!eye)}
              >
                {eye ? <AiTwotoneEye /> : <AiTwotoneEyeInvisible />}
              </span>
            </label>
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required!</p>
            )}
            <Link
              className="text-fuchsia-600 font-semibold underline"
              to={"/forgetPassword"}
            >
              Forget Password?
            </Link>

            <button className="btn md:w-xs btn-neutral mt-4">LogIn</button>
          </fieldset>
        </form>
        <div className="flex justify-center items-center">
          <span className="border-b w-full mr-2 mt-1 border-gray-300"></span>
          <span>or</span>
          <span className="border-b w-full ml-2 mt-1 border-gray-300"></span>
        </div>

        <button
          onClick={handleLogInGoogle}
          className="btn md:w-xs btn-neutral mt-4"
        >
          Login with google
        </button>
        <h1 className="py-2">
          Don't have any account? Please
          <Link
            className="text-fuchsia-600 font-semibold underline"
            to={"/register"}
          >
            Register
          </Link>
        </h1>
      </div>
    );
};

export default LogIn;