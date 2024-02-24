"use client";
// Displays weather information of upcoming days for a selected location
import React, { useEffect, useState } from "react";
import Image from "next/image";
//icons
import sun from "/public/icons/sun.png";
import cloud from "/public/icons/cloud.png";
import fog from "/public/icons/fog.png";
import rain from "/public/icons/rain.png";
import snow from "/public/icons/snow.png";
import storm from "/public/icons/storm.png";
import wind from "/public/icons/windy.png";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    // Sets the appropriate weather icon based on the iconString
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
    // Layout for the mini weather card
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
        <Image src={icon} alt="forecast unavailable" width={64} height={64} />
      </div>
      <p className="text-center font-bold">{temp}&deg;F</p>
    </div>
  );
};

export default MiniCard;
