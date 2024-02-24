"use client";
// Represents current weather condition in a small, concise format
import { useEffect, useState } from "react";
import { useDate } from "@/utils/useDate";
//icons
import sun from "/public/icons/sun.png";
import cloud from "/public/icons/cloud.png";
import fog from "/public/icons/fog.png";
import rain from "/public/icons/rain.png";
import snow from "/public/icons/snow.png";
import storm from "/public/icons/storm.png";
import wind from "/public/icons/windy.png";
import Image from "next/image";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    // Logic to set the correct weather icon based on conditions
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
    // Layout for the weather card component
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
        <Image src={icon} alt="weather_icon" width={64} height={64} />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;F
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <p className="font-normal">{windspeed} km/h</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
