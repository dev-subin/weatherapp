import React, { useState } from "react";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";

const WeatherApp = () => {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState("");
  const [error,setError] = useState('')
  const [darkMode,setDarkMode] =useState(false)
  const handleClick = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=d63e97c70eab4fec92875300220303&q=${data}&aqi=no`
      )
      .then((res) => {
        setResponse(res.data);
        setData("");
      })
      .catch((err) => {
        setError(err)
        setResponse(null)
        setData("")
        setTimeout(() => {
          setError(null)
        }, 3000);
      });
  };
  return (
    <div className={`bg-green-400 dark:bg-black h-[100vh] w-screen bg-cover   ${darkMode && "dark"}`}>
      <div className="dark:bg-[#012346] h-[100vh]">
       <div className="flex justify-center items-center">
       <h1 className="text-2xl text-[#012346] dark:text-white font-bold ">
          <Typewriter
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
          words={['Weather App','Developed by Subin Sabu']}
          w
          />
        </h1>
       </div>
      <div className="flex place-content-evenly mt-12">
        <div className="   mt-8 md:mt-36">
          <h1 className="text-2xl md:text-5xl text-gray-700 dark:text-white font-bold ">
           weather_app
          </h1>
        </div>
        <div className="flex">
          <label class="switch mt-8 md:mt-40">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span class="slider round"></span>
      </label>
          <a href="https://github.com/dev-subin">
            <i class="fa-brands fa-github fa-2xl ml-10 mt-12 md:mt-44 dark:text-white"></i>
          </a>
        </div>
      </div>
     <form action="" onSubmit={(e)=>{
e.preventDefault()
handleClick()
     }}>
     <div>
        <div className="mt-12">
          <div className="flex justify-center items-center">
            <div className="  flex flex-row justify-center items-center w-[400px] md:w-10/12 bg-white dark:bg-black outline-none rounded-full h-12 dark:text-white">
              <i className="fa-solid fa-magnifying-glass fa-xl ml-5 text-gray-400 font-bold"> </i>
              <input
                type="text"
                placeholder="search for location"
                className="outline-none text-2xl w-screen rounded-full h-12 p-5 bg-white dark:bg-black"
                value={data}
                onChange={(e) => setData(e.target.value)}

              />
              <i
                className="fa-solid fa-location-arrow fa-xl mr-5 cursor-pointer text-gray-600 hover:underline hover:text-red-900"
                onClick={handleClick}
              ></i>
            </div>
          </div>
        </div>
      </div></form>
      {
        error&&
        <div className="flex justify-center items-center ">
        <div className="bg-red-700 mt-36 w-96 text-center text-2xl font-bold text-white h-12 rounded-xl border-none outline-none ">
           <p className="text-center">No matching places here 🙂...</p>
         </div>
        </div>
      }
      {response && (
       <div className="flex justify-center items-center">
          <div className=" mt-12 flex flex-col justify-center items-center md:flex-col md:place-content-between lg:flex-row  bg-blue-800 dark:bg-black w-full md:full lg:w-10/12 md:rounded-xl xl:flex-row">
          <div >
            <div>
              <h1 className="text-gray-400 text-center md:text-left font-bold md:ml-12 text-3xl mt-6">
                Current Weather
              </h1>
            </div>
            <div className="mt-8 ">
              <span className="text-blue-400 text-2xl italic font-bold md:ml-24 hover:">
                {response.location.name},{response.location.region}
              </span>
            </div>
            <div className="md:flex flex flex-row">
              <div className="">
                <img
                  src={response.current.condition.icon}
                  alt=""
                  className="w-52"
                />

              </div>
              <div className="mt-6 md:mt-6 flex flex-col">
                <p className="text-7xl md:text-8xl text-[#012346] font-normal">
                  {response.current.temp_c}°
                </p>
                <div>
                <p className="text-gray-400 font-bold  text-3xl mt-6">
            
            {response.current.condition.text}
               </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 md:mt-12">
            <div>
              <p className="text-2xl font-bold text-gray-400 mr-56">
                Feels like <span className="text-[#012346] dark:text-white text-2xl font-bold">{response.current.temp_c}°</span>{" "}
              </p>
            </div>
            <div className="flex flex-row">
              <div className="mt-6 flex flex-row ">
                <div className="">
                  <i class="fa-solid fa-arrow-up fa-xl text-gray-400 font-bold"></i>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#012346] dark:text-white ml-4">
                    {response.current.feelslike_c}°
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-row">
                <div className="ml-10">
                  <i class="fa-solid fa-arrow-down fa-xl text-gray-400"></i>
                </div>
                <p className="text-xl font-bold text-[#012346] dark:text-white ml-4">
                  {response.current.feelslike_c}°
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="mt-6 text-gray-400 font-semibold text-xl">
                <p>Humidity</p>
              </div>
              <div>
                <p className="mt-6 text-[#012346] dark:text-white font-bold text-xl ml-6">
                  {response.current.humidity}%
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mt-4 text-gray-400 font-semibold text-xl">
                <p>Wind</p>
              </div>
              <div>
                <p className="mt-4 text-[#012346] dark:text-white font-bold text-xl ml-14">
                  {response.current.wind_kph}kph
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mt-4 text-gray-400 font-semibold text-xl">
                <p>Pressure</p>
              </div>
              <div>
                <p className="mt-4 text-[#012346] dark:text-white font-bold text-xl ml-8">
                  {response.current.pressure_mb}hpa
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
       
      )}
    </div>
    </div>
  );
};

export default WeatherApp;
