"use client";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";



const SignUpSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Name is required"),

    lastname: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Name is required"),

    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        // .matches(/[0-9]/, "Password must contain at least one number")
        .required("Password is required"),


});

const UpdateUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        const res = await axios.get(`http:///localhost:5000/user/getbyid/${id}`);
        setUserData(res.data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const router = useRouter();
    const signUpForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
            axios
                .put("http://localhost:5000/user/update/" + id, values)
                .then((response) => {
                    // console.log(response.status)
                    // resetForm()
                    toast.success("User Updated Successfully");
                    router.push("/manageUser");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Failed to update User");
                });
        },
        validationSchema: SignUpSchema,
    });
    return (
        <div className='bg-slate-50 '>
            <div className=''>
                <div className="flex w-full  max-w-sm mx-auto overflow-hidden bg-sky-500  rounded-lg shadow-lg shadow-blue-950 lg:max-w-5xl">
                    <div
                        className="mt-4 hidden bg-cover lg:block lg:w-1/2"
                        style={{
                            backgroundImage:
                                'url("https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-man-and-woman-using-smartphones-vector-png-image_4656602.png")'
                        }}
                    />
                    <div className="w-full mt-7  px-6 py-8 md:px-8 lg:w-1/2">

                        <p className="mt-3 text-xl font-sans font-bold text-center text-white ">
                            Create your Account
                        </p>
                        {userData !== null ? (
                <Formik initialValues={userData} onSubmit={signUpForm}>
                  {(updateForm) => {
                    return (
                        <form onSubmit={signUpForm.handleSubmit}>


                            <div className="mt-7">

                                <label
                                    className="block mb-2 text-md font-medium font-serif text-white"
                                    htmlFor="LoggingEmailAddress"
                                >
                                    First_Name
                                </label>
                                {signUpForm.errors.firstname && signUpForm.touched.firstname ? (
                                    <div className="text-red-500 text-sm">
                                        {signUpForm.errors.firstname}
                                    </div>
                                ) : null}
                                <input
                                    id="firstname"
                                    className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-lg "
                                    type="text"
                                    placeholder='Enter your First Name'
                                    onChange={signUpForm.handleChange}
                                    value={signUpForm.values.firstname}
                                />
                            </div>

                            <div className="mt-2">
                                <label
                                    className="block mb-2 text-md font-medium font-serif text-white"
                                    htmlFor="LoggingEmailAddress"
                                >
                                    Last_Name
                                </label>
                                {signUpForm.errors.lastname && signUpForm.touched.lastname ? (
                                    <div className="text-red-500 text-sm">
                                        {signUpForm.errors.lastname}
                                    </div>
                                ) : null}
                                <input
                                    id="lastname"
                                    className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-lg "
                                    type="text"
                                    placeholder='Enter your Last Name'
                                    onChange={signUpForm.handleChange}
                                    value={signUpForm.values.name}
                                />
                            </div>
                            <div className="mt-2">
                                <label
                                    className="block mb-2 text-md  font-medium font-serif text-white"
                                    htmlFor="LoggingEmailAddres"
                                >
                                    Email_Address
                                </label>
                                {signUpForm.errors.email && signUpForm.touched.email ? (
                                    <div className="text-red-500 text-sm">
                                        {signUpForm.errors.email}
                                    </div>
                                ) : null}
                                <input
                                    id="email"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                                    type="email"
                                    placeholder='Enter your Email'
                                    onChange={signUpForm.handleChange}
                                    value={signUpForm.values.email}
                                />
                            </div>
                            <div className="mt-4">

                                <label
                                    className="block mb-2 text-md  font-serif text-white "
                                    htmlFor="loggingPassword"
                                >
                                    Password
                                </label>

                                {signUpForm.errors.passworde && signUpForm.touched.password ? (
                                    <div className="text-red-500 text-sm">
                                        {signUpForm.errors.password}
                                    </div>
                                ) : null}
                                <input
                                    id="password"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                                    type="password"
                                    placeholder='Enter password'
                                    onChange={signUpForm.handleChange}
                                    value={signUpForm.values.password}
                                />
                            </div>
                            <div className="mt-6">
                                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Update
                                </button>

                            </div>
                        </form>
                              );
                            }}
                          </Formik>
                        ) : (
                          <p>Loading......</p>
                        )}
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
        </div>
    )
}

export default UpdateUser