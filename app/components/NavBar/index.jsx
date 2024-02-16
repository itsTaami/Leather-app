import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <>
      <nav className="bg-white w-full flex justify-between items-center text-black py-12 ">
        <div className="w-[20%]">
          <Link href="/">
            <h2 className="font-extrabold text-3xl items-center flex">LOGO</h2>
          </Link>
        </div>
        <div className="w-[60%]">
          <ul className=" flex justify-evenly items-center font-bold  ">
            <li>
              <Link href={"Men"}>Men</Link>
            </li>
            <li>
              <Link href={"Women"}>Women</Link>
            </li>
            <li>
              <Link href={"Kids"}>Kids</Link>
            </li>
          </ul>
        </div>
        <div className="w-[20%]">
          <ul className="flex justify-between items-center">
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
