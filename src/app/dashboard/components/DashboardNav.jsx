import React from 'react'

import UserDropdown from './UserDropdown.jsx'
import Heading from '@/shared/Heading'
import AvatarDropdown from '@/app/(client-components)/(Header)/AvatarDropdown'

export default function DashboardNav() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap ">
          {/* Brand */}
          {/* display none in tailwind */}
          <Heading isCenter={false} className="my-6 text-black hidden md:block">
            Dashboard
          </Heading>

          {/* Search */}
          {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch font-bold">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="las la-search text-blueGray-400"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            {/* <UserDropdown ico="user" /> */}
            <AvatarDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  )
}
