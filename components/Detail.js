'use client';
import { Image } from '@mantine/core';
import React from 'react';
import { FaCloudSun, FaRoad } from 'react-icons/fa';
import { GiCargoShip } from 'react-icons/gi';
import { motion } from 'framer-motion';
const Detail = () => {
  return (
    <div className="min-h-screen  py-[100px] w-full  bg-[#219e21]">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-8  mx-auto w-[70%]">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="left text-center md:text-left "
        >
          <h2 className="font-bold text-white text-xl  text-center md:text-4xl mb-24 ">
            THIS IS ALAIGBO
          </h2>
          <div className="flex space-x-4 items-center justify-center ">
            <p className="md:text-lg  text-base  mb-8 text-[#FFCC29] border-b border-[#FFCC29] pb-2 w-fit">
              PLACE
            </p>
            <p className="md:text-lg  text-base mb-8 text-[#fff] border-b border-[#fff] pb-2 w-fit">
              REGIONS/CITIES
            </p>
            <p className="md:text-lg  text-base mb-8 text-[#fff] border-b border-[#fff] pb-2 w-fit">
              METRICS
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="left text-white"
        >
          <div className="top flex sm:flex-row space-y-6 justify-between flex-col mb-16">
            <div className=" flex flex-col items-center gap-y-2 ">
              <FaCloudSun color="white" size={50} />
              <div className="text-center sm:text-left">
                <p>AN AVERAGE ANNUAL</p>
                <p>TEMPERATURE OF 31</p>
              </div>
            </div>
            <div className="left ">
              <div className="flex flex-col items-center ">
                <FaRoad color="white" size={50} />
                <div className="text-center ">
                  <p>29,000KM LAND</p>
                  <p>MASS, 42% ARABLE</p>
                  <p>LAND FILLED WITH</p>
                  <p>NATURAL RESOURCES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex   items-center flex-col gap-y-16">
            <div className="flex flex-col items-center  ">
              <GiCargoShip color="white" size={50} />
              <div className="text-center ">
                <p>ALAIGBO IS</p>
                <p>SURROUNDED</p>
                <p>BY THE</p>
                <p>ATLANTIC OCEAN</p>
              </div>
            </div>
            <p className="text-center ">
              Alaigbo is bounded by River Niger on the West, Riverine Niger
              Delta on the South, Cross River on the East and neighboring
              Cameroon also and the rivers are few miles to the atlantic which
              makes it a conducive environment for trade.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Detail;
