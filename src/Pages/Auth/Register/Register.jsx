import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { Link } from "react-router";
import { AuthContext } from "../../../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FaUserLarge } from "react-icons/fa6";
import { ImArrowUp2 } from "react-icons/im";
import axios from "axios";

const Register = () => {
  const [eye, setEye] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userRegister, updateUserInfo, userSignInGoogle } =
    useContext(AuthContext);

  const handleRegister = (data) => {
    // console.log(data);
    const photoFile = data.photo[0];

    // ** User Register
    userRegister(data.email, data.password)
      .then(() => {
        // ** Update User Info

        const formData = new FormData();
        formData.append("image", photoFile);

        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_image_api_Key
            }`,
            formData
          )
          .then((res) => {
            const updateInfo = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };

            updateUserInfo(updateInfo);
          });
        toast.success("Your Account has been Successfully Created.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };


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
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-2 rounded-box"
      >
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <p className="text-base">Register with ZapShift</p>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true, pattern: /^[A-Za-z]/i })}
            className="input outline-0"
            placeholder="Enter name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is Required!</p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="text-red-500">Please enter only latters!</p>
          )}

          {/* Image */}
          <label className="label">Photo</label>
          <label
            title="Choose file"
            className="rounded-full cursor-pointer w-15 h-15 relative p-4 bg-[#e5e2e2]"
          >
            <input
              type="file"
              {...register("photo", {
                required: true,
              })}
              className="hidden"
            />
            <FaUserLarge className="text-2xl text-[#7e8182]" />
            <ImArrowUp2 className="absolute p-1 text-xl font-extrabold rounded-full bg-white bottom-2 right-1 z-50 text-[#CAEB66]" />
          </label>
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Please upload your image!</p>
          )}

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input outline-0"
            placeholder="Enter email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required!</p>
          )}

          <label className="label">Password</label>
          <label className="input outline-0">
            <input
              type={eye ? "password" : "text"}
              {...register("password", {
                required: true,
                minLength: 6,
                validate: {
                  hasUpper: (value) =>
                    /[A-Z]/.test(value) ||
                    "Must include at least 1 uppercase letter!",
                  hasLow: (value) =>
                    /[a-z]/.test(value) ||
                    "Must include at least 1 lowercase letter!",
                  hasNum: (value) =>
                    /\d/.test(value) || "Must include at least 1 number!",
                },
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
            <p className="text-red-500">Password is Required!</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 6 characters!
            </p>
          )}
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <button className="btn md:w-xs btn-neutral mt-4">Register</button>
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
        Register with google
      </button>
      <h1 className="py-2">
        Already have an account? Please{" "}
        <Link
          className="text-fuchsia-600 font-semibold underline"
          to={"/login"}
        >
          Login
        </Link>
      </h1>
    </div>
  );
};

export default Register;
