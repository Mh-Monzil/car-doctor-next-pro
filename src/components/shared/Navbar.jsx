import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <div className="bg-white text-black">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </div>
          <Link href="">
            <Image src="/assets/logo.svg" height={40} width={80} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <div className="flex items-center space-x-6">
            {navItems.map((nav) => (
              <Link key={nav.path} href={nav.path} className="font-semibold hover:text-primary transition-all duration-300 ease-in-out">
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <a className="py-2 px-4 border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out cursor-pointer">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
