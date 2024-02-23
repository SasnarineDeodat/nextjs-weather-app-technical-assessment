"use client";
import { useEffect, useState } from "react";
import { useStateContext } from "@/context";
//images
import Clear from "/public/images/Clear.jpg";
import Fog from "/public/images/fog.png";
import Cloudy from "/public/images/Cloudy.jpg";
import Rainy from "/public/images/Rainy.jpg";
import Snow from "/public/images/snow.jpg";
import Stormy from "/public/images/Stormy.jpg";
import Sunny from "/public/images/Sunny.jpg";
import Image from "next/image";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <Image
      src={image.src}
      alt="weather_image"
      className="fixed left-0 top-0 -z-[10]"
      sizes="100vw"
      fill
    />
  );
};

export default BackgroundLayout;
