"use client";
import BackgroundLayout from "@/components/BackgroundLayout";
import MiniCard from "@/components/MiniCard";
import React from "react";
import { useStateContext } from "@/context";

export default function Page() {
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  return (
    <div>
      Weather
      <BackgroundLayout></BackgroundLayout>
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
    </div>
  );
}
