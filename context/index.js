"use client";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Waterbury, Connecticut, USA");
  const [thisLocation, setLocation] = useState("");

  // fetch api
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "us",
        shortColumnNames: 0,
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.error(e);
      // if the api throws error.
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
