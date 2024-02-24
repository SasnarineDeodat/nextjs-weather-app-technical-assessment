"use client";
import BackgroundLayout from "@/components/BackgroundLayout";
import MiniCard from "@/components/MiniCard";
import React from "react";
import { useStateContext } from "@/context";
import dynamic from "next/dynamic";
const WeatherCard = dynamic(() => import("@/components/WeatherCard"), {
  ssr: false,
});

export default function Page() {
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  return (
    <div>
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
