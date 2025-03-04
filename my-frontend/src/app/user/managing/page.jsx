"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams, Link } from "react-router-dom";
// import classes from './template.module.css'

const Managing = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/service/getbycategory/managing");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const displayProduct = () => {
    
    return product.map((obj) => (
      <div className="w-full max-w-sm bg-orange-200  border-gray-200 rounded-lg hover:shadow-2xl hover:shadow-gray-400 hover:transform hover:scale-105 transition duration-500 ease-in-out 2s">

        <img
          className="p-8 rounded-t-lg"
          src={obj.image}
          alt=""
        />

        <div className="px-5 pb-5 ">

          <h5 className="text-3xl font-sabs tracking-tight text-gray-700 ">
            {obj.name}
          </h5>
          <p className="text-md mt-10 mb-10 font-semibold tracking-tight text-gray-90">{obj.description}</p>

          <Link
            href={"/view/" + obj._id}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
          </Link>

        </div>
      </div>

    ));
  };

  return (
    <div className="">
    
      <div className="container m-14  ">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8  ">
          {" "}
          {displayProduct()}{" "}
        </div>
        {/* <section className="bg-white ">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-gray-900">
      More websites 
    </h1>
    <p className="mt-4 text-center text-gray-500 dark:text-gray-900">
      
    </p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage:
            'url("https://media.designrush.com/articles/207772/conversions/Best-Single-Page-details.jpg")'
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Best website collections
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
            Website
          </p>
        </div>
      </div>
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage:
            'url("https://cdn.psdrepo.com/images/2x/fashion-influencer-ui-kit-for-adobe-xd-g1.jpg")'
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Block of Ui kit collections
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
            Ui kit
          </p>
        </div>
      </div>
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-psd/phone-screen-mockup-psd-with-hand-holding-aesthetic-beige-widgets_53876-111326.jpg")'
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Ton’s of mobile mockup
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
            Mockups
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}







       
      </div>
    </div>

    
  );
};







export default Managing;