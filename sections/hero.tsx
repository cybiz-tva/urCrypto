import React from 'react';

// types
import { tSection } from 'types/landingPage.type';

// images
import pageAdmin from "public/images/page-admin.png";
import binance from "public/images/binance.png"
import coinbase from "public/images/coinbase.png"
import bitcoin from "public/images/bitcoin.png"
import tether from "public/images/tether.png"
import bitmex from "public/images/bitmex.png"

const Hero : tSection = ({styles}) => {

  return (
    <>
      <section className=" bg-gradient-to-b from-white to-[#F8F8FC] min-h-screen pt-[5vh] pb-[8vh] px-[13vw] flex flex-col items-center">
        <div className="text-center px-[20vw]">
          {/* <h1 className=" text-[56px] text-blue-600 font-semibold ">One platform</h1>
          <h1 className=" text-[56px] text-black font-semibold ">all things Crypto</h1> */}
          <h1 className={`text-[56px] font-bold ${styles["title-hero"]}`}>
            <div className="text-blue-600">
              One platform
            </div>
            <div className="text-black">
              all things Crypto
            </div>
          </h1>
          <p className=" my-6 text-gray-600 ">
Transfer funds to get started with DEX Allocation tools          </p>
           

            <button
              className="bg-blue-600 rounded-md text-white px-5 
                        hover:bg-blue-800">
             0x3fab39782af1eac2f4caa035d8cb66ea7b822ee4
            </button>
          </div>
        </div>
        <div className="mt-20">
          <img src={pageAdmin.src} alt="Page Admin" />
        </div>
        <div className="flex flex-row gap-[10%] w-full justify-center mt-16 px-[10%]">
          <img src={binance.src} alt="" />
          <img src={coinbase.src} alt="" />
          <img src={bitcoin.src} alt="" />
          <img src={tether.src} alt="" />
          <img src={bitmex.src} alt="" />
        </div>
        <div className=" mt-[4%] w-full">
          <div className="bg-white border-2 border-gray-100 rounded-lg py-12 grid grid-cols-3 divide-x-2">
            <div className="text-center">
              <h1 className=" text-[48px] text-semibold">99K</h1>
              <p className=" text-[18px]">People have joined</p>
            </div>
            <div
              className="text-center">
                <h1 className=" text-[48px] text-semibold">50K</h1>
                <p className=" text-[18px]">VVIP users have joined</p>
            </div>
            <div 
              className="text-center">
                <h1 className=" text-[48px] text-semibold">100+</h1>
                <p className=" text-[18px]">Big Companies have joined</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
