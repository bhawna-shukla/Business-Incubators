import React from 'react'
import Link from 'next/link'
import useAppContext from '@/contex/appContex'
const Navbar = () => {
    const {loggedIn, logout} = useAppContext();
  return (
    <div>
         <nav >
      <>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-slate-50 border-b  ">

          <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
            {/* <BuildingOfficeIcon className='size-16 text-violet-800' /> */}
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
    </div>
  )
}

export default Navbar