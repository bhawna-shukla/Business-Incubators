"use client"
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const contactSchema = Yup.object().shape({
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




});
const Contact = () => {
  const router = useRouter();
  const contactForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      detail:"",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("User Added Successfully");
          router.push("/user/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add User");
        });
    },
    validationSchema: contactSchema,
  });
  return (
    <div className='bg-slate-50 min-h-screen  flex items-center justift-center'>
        <>
  {/* Contact Us */}
  <div className=" bg-slate-300 max-w-[85rem] mt-5 px-4 py-10 bg-  border-2 shadow-lg shadow-gray-800 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl lg:max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl  text-blue-600 font-[sans-serif] sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-1 text-gray-800">
          We'd love to talk about how we can help you.
        </p>
      </div>
      <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        {/* Card */}
        
        <div className="flex flex-col  rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 className="mb-8 text-2xl font-[Poppins] text-gray-800">
            Fill in the form
          </h2>
          <form onSubmit={contactForm.handleSubmit} >
            <div className="grid gap-4">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                    First Name
                  </label>
                  {contactForm.errors.firstname && contactForm.touched.firstname? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.firstname}
                  </div>
                ) : null}
                  <input
                    type="text"
                  
                    id="firstname"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="First Name"
                    onChange={contactForm.handleChange}
                  value={contactForm.values.firstname}
                  />
                </div>
                <div>
                  <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                    Last Name
                  </label>
                  {contactForm.errors.lastname && contactForm.touched.lastname? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.lastname}
                  </div>
                ) : null}
                  <input
                    type="text"
                    
                    id="lastname"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Last Name"
                    onChange={contactForm.handleChange}
                  value={contactForm.values.lastname}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label htmlFor="hs-email-contacts-1" className="sr-only">
                  Email
                </label>
                {contactForm.errors.email && contactForm.touched.email? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.email}
                  </div>
                ) : null}
                <input
                  type="email"
              
                  id="email"
                 
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Email"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.email}
                />
              </div>
              <div>
                <label htmlFor="hs-phone-number-1" className="sr-only">
                  Phone Number
                </label>
                {contactForm.errors.phonenumber && contactForm.touched.phonenumber? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.phonenumber}
                  </div>
                ) : null}
                <input
                  type="text"
                  
                  id=""
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Phone Number"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.phonenumber}
                />
              </div>
              <div>
                <label htmlFor="hs-about-contacts-1" className="sr-only">
                  Details
                </label>
                {contactForm.errors.detail && contactForm.touched.detail? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.detail}
                  </div>
                ) : null}
                <textarea
                  id="detail"
                 
                  rows={4}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Details"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.detail}
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-4 grid">
              <button
               type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Send inquiry
              </button>
            </div>
           </form>
        </div>
        {/* End Card */}
       <div className=' '>
        {/* <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--helpline-support-digital-marketing-pack-business-illustrations-4379020.png" alt=""/> */}
        <img src="https://static.wixstatic.com/media/8c357e_8be3bf1915254dc1bef88cdcf3e89e67~mv2.gif" alt="" />
       </div>
      </div>
    </div>
  </div>
  {/* End Contact Us */}
</>


    </div>
  )
}

export default Contact