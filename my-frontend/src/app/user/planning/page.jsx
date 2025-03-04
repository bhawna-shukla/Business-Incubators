"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { useParams, Link } from "react-router-dom";
// import classes from './template.module.css'

const Planning = () => {
  const [product, setProduct] = useState([]);
  const { category } = useParams()

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/service/getbycategory/planning");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (category) {
      setProduct(data.filter((ser) => ser.category === category));
    } else {
      setProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const displayProduct = () => {
    return product.map((obj) => (
      <div className="w-full max-w-sm bg-pink-200  border-gray-200 rounded-lg hover:shadow-2xl hover:shadow-gray-400 hover:transform hover:scale-105 transition duration-500 ease-in-out 2s">

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
        <section className="bg-white ">
          <div className="container px-6 py-10 mx-auto">


          </div>
        </section>








      </div>
    </div>


  );
};







export default Planning;