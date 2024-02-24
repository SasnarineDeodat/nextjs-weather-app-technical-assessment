"use client";
import React, { useEffect, useState } from "react";
import sun from "/public/icons/sun.png";
import cloud from "/public/icons/cloud.png";
import fog from "/public/icons/fog.png";
import rain from "/public/icons/rain.png";
import snow from "/public/icons/snow.png";
import storm from "/public/icons/storm.png";
import wind from "/public/icons/windy.png";
import Image from "next/image";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);
  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <Image src={icon} alt="forecast not available" width={64} height={64} />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;
