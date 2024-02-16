"use client";
import React from "react";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Content = () => {
  return (
    <>
      <div className="flex justify-between w-full h-full bg-white text-black">
        <div className="flex justify-around w-[65%] flex-col py-28 px-24  ">
          <div>
            <h1 className="text-5xl bg-gray-900 h-12  ">
              <span style={{ color: "#000" }}>
                <Typewriter
                  words={["FEEL BETTER", "BE YOURSELF", "BE UNIQUE"]}
                  loop={false}
                />
              </span>
            </h1>
          </div>
          <p className="text-xl w-[80%] bg-red-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            consequatur aliquid officia dignissimos facere laudantium, beatae
            atque odit labore commodi.
          </p>
        </div>

        <div className="">
          <Image
            src={
              "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={600}
            height={600}
            alt="Leather"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Content;
