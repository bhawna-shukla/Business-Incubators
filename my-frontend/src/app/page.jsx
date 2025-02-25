"use client"
import { UserCircleIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import React from 'react'

import Link from 'next/link'
import useAppContex from '@/contex/appContex'



const Page = () => {

  const { loggedIn, logout } = useAppContex();
  return (


    // </main>
    <div className=' h-screen mx-auto  px-4 sm:px-6 lg:px-8 bg-slate-50'>

      <>
      <nav >
      <>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-slate-50 border-b  ">

          <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
            <BuildingOfficeIcon className='size-16 text-violet-800' />
            <h1 className=' text-3xl font-[cursive] font-bold text-violet-600'>Business<span className='text-blue-700 '>Incubator</span></h1>
            {/* Collapse */}
            <div
              id="hs-header-base"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
              aria-labelledby="hs-header-base-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <div className="py-2 md:py-0  flex flex-col  md:flex-row md:items-center gap-0.5 md:gap-1">

                  <div className="flex flex-col space-x-12 md:flex-row md:justify-end md:items-center  md:gap-1">



                    <Link
                      className="p-2 ml-9  flex items-center font-bold  text-xl text-gray-700 hover:underline hover:text-purple-700 underline-offset-8 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="/"
                    >

                      Home
                    </Link>
                    <Link
                      className="p-2 ml-9  flex items-center font-bold  text-xl text-gray-700 hover:underline hover:text-purple-700 underline-offset-8 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="/admin/dashboard"
                    >

                      Admin
                    </Link>
                    <Link
                      className="p-2 flex items-center font-bold text-xl text-gray-700 hover:underline hover:text-purple-700 underline-offset-8 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="/user/contact"
                    >

                      Contact
                    </Link>
                    <Link
                      className="p-2 flex items-center font-bold text-xl text-gray-700 hover:underline hover:text-purple-700 underline-offset-8 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="/user/service"
                    >

                      Sevices
                    </Link>
                    <Link
                      className="p-2 flex items-center font-bold text-xl text-gray-700 hover:underline hover:text-purple-700 underline-offset-8 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="/user/about"
                    >

                      About
                    </Link>
                  </div>
                  <div>
                    <div>

                    </div>
                  </div>

                  {/* Button Group */}
                  {loggedIn ? (
                    <div className="md:ms-auto mt-2 md:mt-0 flex flex-wrap items-center gap-x-1.5">
                      <button
                        className="px-7 py-3 inline-flex items-center font-medium text-sm rounded-lg bg-red-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (


                    <div className="flex flex-wrap items-center gap-x-1.5">
                      <Link
                        className="py-[7px] px-2.5 inline-flex items-center font-bold text-xl  text-purple-700 rounded-lg border border-gray-200 bg-white   shadow-sm   hover:bg-violet-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                        href="/user/login"
                      >
                        Sign in
                      </Link>
                      <Link
                        className="py-[7px] px-2.5 inline-flex items-center font-bold text-xl text-blue-700  rounded-lg  border border-gray-200 bg-white shadow-sm  hover:bg-violet-600 hover:text-white  disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                        href="/user/signup"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}


                  {/* End Button Group */}
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>
    </nav>
      

        <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-slate-50 border-b  ">

        </header>
        {/* Hero */}
        <div >
          {/* Grid */}
          <div className="grid  lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className=" mt-12 block  font-[sans-serif]  font-semibold text-gray-800 sm:text-3xl md:text-4xl lg:text-6xl dark:text-gray-700">
                Start Strong, Scale Fast with Our

                <span className='text-purple-800 px-4'>Incubator</span> Support
              </h1>
             
              <h2 className="mt-3 font-sans  text-3xl text-gray-800 dark:text-blue-600">
                Join Our Business  Incubator <span className='text-purple-900 text-6xl font-serif'>Today,</span>

              </h2>
             
              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full sm:w-auto">
                  <button className=' border-purple-600  border-2 rounded-3xl border-opacity-45  flex  px-3 py-2 gap-2'>
                    {/* <label htmlFor="hero-input" className="sr-only">
              
            </label> */}
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="m-2 p-1 text-gray-800 bg-transparent"
                      placeholder="Enter work email"
                    />
                    <a
                      className="w-full sm:w-auto py-3 px-4  justify-center items-center gap-x-2 text-lg font-medium rounded-2xl border border-transparent bg-violet-600 text-white hover:bg-blue-700 focus:outline-none"
                      href="/user/login"
                    >
                      Get Started
                    </a>
                  </button>
                </div>
                {/* <a
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Request demo
          </a> */}
              </div>
              {/* Brands */}
              <div className="mt-6 lg:mt-12">

                <div className="mt-4 flex gap-x-8">

                </div>
              </div>
              {/* End Brands */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src="https://www.chawtechsolutions.com/wp-content/uploads/2019/07/graphic-thumb.png"
                alt="Hero Image"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </>


      {/* features */}

      <section className="bg-white">
        <div className="container  px-6 py-10 mx-auto">
          <h1 className="text-xl font-semibold text-center text-blue-800 capitalize lg:text-7xl ">
            Our Features
            {/* <span className="text-blue-500">Components</span> */}
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">

              <h1 className="text-xl font-semibold text-gray-800 capitalize ">
                Mentorship and Guidance
              </h1>
              <p className=" text-gray-700 ">
                Startups receive ongoing coaching and advice to help refine their business model, product, and market positioning.
              </p>

            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">

              <h1 className="text-xl font-semibold text-gray-800 capitalize ">

                Access to Funding
              </h1>
              <p className="text-gray-500 ">
                They often organize pitch events where startups can present their ideas to potential investors
              </p>

            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">

              <h1 className="text-xl font-semibold text-gray-800 capitalize ">
                Shared Workspace
              </h1>
              <p className="text-gray-500 ">
                Startups benefit from affordable office spaces, co-working environments, or private offices, which are typically fully equipped with internet, office furniture, and sometimes lab facilities.
              </p>
              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >


              </a>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 ">

              <h1 className="text-xl font-semibold text-gray-800 capitalize">
                Networking Opportunities
              </h1>
              <p className="text-gray-500 ">
                Networking events, workshops, and seminars on various business topics provide opportunities for startups to learn and connect with industry experts and peers.
              </p>

            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">

              <h1 className="text-xl font-semibold text-gray-800 capitalize ">
                Technology and Innovation Support
              </h1>
              <p className="text-gray-500 ">

                Help with product development, software tools, prototypes, and other technical aspects of the business
              </p>

            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">

              <h1 className="text-xl font-semibold text-gray-800 capitalize">
                Market Access
              </h1>
              <p className="text-gray-500 ">
                Some incubators help startups gain access to potential customers through established networks or partnerships with larger businesses.
              </p>
              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >


              </a>
            </div>
          </div>
        </div>
      </section>

      {/* get start process */}

      <>
        {/* Approach */}
        <div className="bg-violet-700">
          {/* Approach */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Our approach
              </h2>
              <p className="mt-1 text-neutral-400">
                This profound insight guides our comprehensive strategy — from
                meticulous research and strategic planning to the seamless execution
                of brand development and website or product deployment.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Features Image"
                />
              </div>
              {/* End Col */}
              {/* Timeline */}
              <div>
                {/* Heading */}
                <div className="mb-4">
                  <h3 className="text-[#ff0] text-xs font-medium uppercase">Steps</h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">
                        Market Research and Analysis:
                      </span>
                      Identify your target audience and understand their needs,
                      preferences, and behaviors.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">
                        Product Development and Testing:
                      </span>
                      Develop digital products or services that address the needs and
                      preferences of your target audience.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">Marketing and Promotion:</span>
                      Develop a comprehensive marketing strategy to promote your
                      digital products or services.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">Launch and Optimization:</span>
                      Launch your digital products or services to the market, closely
                      monitoring their performance and user feedback.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    />
                  </svg>
                  Schedule a call
                </a>
              </div>
              {/* End Timeline */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Approach */}
      </>

      <>
        {/* Team */}
        <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Our team
            </h2>
            <p className="mt-1 text-gray-600">Creative people</p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">David Forren</h3>
                <p className="text-sm text-gray-600">Founder / CEO</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Amil Evara</h3>
                <p className="text-sm text-gray-600">UI/UX Designer</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Ebele Egbuna</h3>
                <p className="text-sm text-gray-600">Support Consultant</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Maria Powers</h3>
                <p className="text-sm text-gray-600">Director of sales</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Delia Pawelke</h3>
                <p className="text-sm text-gray-600">Front-end Developer</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Tom Lowry</h3>
                <p className="text-sm text-gray-600">UI/UX Designer</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Louise Donadieu</h3>
                <p className="text-sm text-gray-600">Support Consultant</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Jeff Fisher</h3>
                <p className="text-sm text-gray-600">Project Manager</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Sophia Harrington</h3>
                <p className="text-sm text-gray-600">Project Manager</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800">Christina Kray</h3>
                <p className="text-sm text-gray-600">Support Consultant</p>
              </div>
            </div>
            {/* End Col */}
            {/* <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800">Amy Forren</h3>
          <p className="text-sm text-gray-600">Product Designer</p>
        </div>
      </div> */}
            {/* End Col */}
            {/* <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800">Philip Williams</h3>
          <p className="text-sm text-gray-600">Support Consultant</p>
        </div>
      </div> */}
            {/* End Col */}
            {/* <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800">Brian Lofoten</h3>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
        </div>
      </div> */}
            {/* End Col */}
            {/* <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800">Jessica Dorsey</h3>
          <p className="text-sm text-gray-600">Director of sales</p>
        </div>
      </div> */}
            {/* End Col */}
            {/* <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800">Nick Jackson</h3>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
        </div>
      </div> */}
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Card */}
          <div className="mt-12 flex justify-center">
            <div className="border border-gray-200 py-2 px-3 rounded-full">
              <div className="flex items-center gap-x-3">
                <span className="text-sm text-gray-500">Want to work with us?</span>
                <a
                  className="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                  href="/user/contact"
                >
                  ConactUs
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Team */}
      </>



      <>
        {/* ========== FOOTER ========== */}
        <footer className="  w-full  shadow-2xl shadow-black  bg-violet-700 py-10 px-4 sm:px-6 lg:px-8 ">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <BuildingOfficeIcon className='size-12 text-white flex mb-6' />
              <div className="space-x-4">
                <a
                  className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                  </svg>
                </a>
              </div>

            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase">
                Product
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400  uppercase">
                Company
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Careers
                  </a>{" "}
                  <span className="inline text-blue-600">— We're hiring</span>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Newsroom
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Sitemap
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase">
                Resources
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Community
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Help &amp; Support
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    eBook
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    What's New
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Status
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase">
                Developers
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Api
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Status
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    GitHub
                  </a>{" "}
                  <span className="inline text-blue-600">— New</span>
                </p>
              </div>
              <h4 className="mt-7 text-xs font-semibold text-neutral-400 uppercase">
                Industries
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Financial Services
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-white focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Education
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="pt-5 mt-5 border-t border-gray-200">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex flex-wrap items-center gap-3">
                {/* Language Dropdown */}
                <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                  <button
                    id="hs-footer-language-dropdown"
                    type="button"
                    className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="shrink-0 size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us1"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                    <svg
                      className="hs-dropdown-open:rotate-180 shrink-0 size-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <div
                    className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-footer-language-dropdown"
                  >
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3.5 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-dk"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                        <path fill="#fff" d="M144 0h73.1v512H144z" />
                        <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                      </svg>
                      Dansk
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                     
                    </a>
                  </div>
                </div>
                {/* End Language Dropdown */}
                <div className="space-x-4 text-sm">
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Terms
                  </a>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Privacy
                  </a>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    href="#"
                  >
                    Status
                  </a>
                </div>
              </div>

              {/* End Col */}
            </div>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </>




    </div>



  )
}

export default Page