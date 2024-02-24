"use client";
import BackgroundLayout from "@/components/BackgroundLayout";
import MiniCard from "@/components/MiniCard";
import { useState } from "react";
import search from "/public/icons/search.svg";
import { useStateContext } from "@/context";
import dynamic from "next/dynamic";
import Image from "next/image";
const WeatherCard = dynamic(() => import("@/components/WeatherCard"), {
  ssr: false,
});

export default function Page() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <Image src={search} alt="search" height={24} width={24} />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // sumit the form
                submitCity();
              }
            }}
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
