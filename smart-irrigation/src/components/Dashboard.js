import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import "./components-css/Dashboard.css";

function Dashboard() {
  const [info, setInfo] = useState("wow");
  const [temp, setTemp] = useState("wow");
  const [water, setWater] = useState("wow");
  const [hummid, setHumid] = useState("wow");
  const [rain, setRain] = useState("wow");
  const [latitude, setLatitude] = useState("12.9662976");
  const [longitude, setLongitude] = useState("77.6404992");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // Get the coordinates from the position object
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lng);

      // Print the coordinates to the console
      console.log("Latitude: " + lat + ", Longitude: " + lng);
    });

    fetch("https://api.thingspeak.com/channels/1958878/feeds.json?results=1")
      .then((response) => response.json())
      .then((info) => {
        // setWater(info.feeds[0].field3);
        setWater(info.feeds[0].field4);
      });
    fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&exclude=hourly,daily&appid=406b154331868aa69ddc3dd64454c8c6"
    )
      .then((response) => response.json())
      .then((info) => {
        setTemp(info.current.temp);
        setHumid(info.current.humidity);
        setRain(info.minutely[0].precipitation);
      });
  }, []);

  return (
    <div className="background">
      <h1>Dashboard</h1>
      
      <div className="container">
        
            <iframe className="soilGraph"
              src="https://thingspeak.com/channels/1977132/charts/1?bgcolor=%23ffffff&color=%2306d6a0&dynamic=true&results=20&title=Drip+1&type=spline"
            />
         
          <div className="TV">
            <div className="Temp">
              Today's Temperature <h2>{(temp - 273.15).toFixed(2)}°C</h2>
            </div>
            <div className="Humidity">
              Today's Humidity<h2>{hummid}</h2>{" "}
            </div>
            <div className="Rain">
              Today's Rain <h2>{rain}</h2>{" "}
            </div>
          </div>

          
            <iframe className="waterGraph"
              src="https://thingspeak.com/channels/1977132/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=20&title=Total+Water+Used&type=line"
            />
          
         
          <div className="WSB">
            <div className="WS">
              Tomorrow's Volumetric Soil Moisture{" "}
              <h2>{parseInt(water).toFixed(2)}</h2>
            </div>
            <div className="Irrigate">
              <Button variant="outlined">Irrigate</Button>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Dashboard;
