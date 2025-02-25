"use client"
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAppContex from '@/contex/appContex'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});




const Login = () => {

  const { setLoggedIn, setCurrentUser } = useAppContex();
  const router = useRouter()
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status)
          localStorage.setItem('user', JSON.stringify(response.data))
          setLoggedIn(true)
          resetForm()
          toast.success("Login Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to Login");
        });
    },
    validationSchema: LoginSchema,
  });
  return (
    <div className=''>

      <div className="flex w-full mt-24 max-w-sm mx-auto overflow-hidden bg-sky-500  rounded-lg shadow-lg shadow-blue-950 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=")'
          }}
        />
        <div className="w-full mt-7  px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            {/* <img
        className="w-auto h-7 sm:h-8"
        src="https://e7.pngegg.com/pngimages/549/560/png-clipart-computer-icons-login-scalable-graphics-email-accountability-blue-logo.png"
        alt=""
      /> */}
          </div>
          <p className="mt-3 text-6xl font-sans font-bold text-center text-white ">
            Welcome back!
          </p>
          {/* <a
      href="#"
      className="flex items-center justify-center mt-4 text-gray-600 "
    >
      <div className="px-4 py-2">
        <svg className="w-6 h-6" viewBox="0 0 40 40">
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <path
            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
            fill="#FF3D00"
          />
          <path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </svg>
      </div>
      <span className="w-5/6 px-4 py-3 font-bold text-center">
        Sign in with Google
      </span>
    </a> */}
          {/* <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
      <a
        href="#"
        className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or login with email
      </a>
      <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
    </div> */}
          <form onSubmit={loginForm.handleSubmit}>
            <div className="mt-7">
              <label
                className="block mb-2 text-lg font-medium font-serif text-white"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              {loginForm.errors.email && loginForm.touched.email ? (
                <div className="text-red-500 text-sm">
                  {loginForm.errors.email}
                </div>
              ) : null}
              <input
                id="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                type="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
              />
            </div>
            <div className="mt-4">

              <label
                className="block mb-2 text-lg  font-serif text-white "
                htmlFor="loggingPassword"
              >
                Password
              </label>
              {loginForm.errors.password && loginForm.touched.password ? (
                <div className="text-red-500 text-sm">
                  {loginForm.errors.password}
                </div>
              ) : null}

              <input
                id="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                type="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
              />

            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          {/* <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      <a
        href="#"
        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or sign up
      </a>
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    </div> */}
        </div>
      </div>

    </div>

  )
}

export default Login