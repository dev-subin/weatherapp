import React from "react";

const WeatherApp = () => {
  return (
    <div className=" bg-gradient-to-t from-cyan-500 to-blue-500 h-[100vh] ">
      <div className="flex place-content-evenly">
       <div className="">
       <h1 className="text-5xl text-gray-700 font-bold pt-96 ">Weather App</h1>
       </div>
       <div className="flex">
         <div className="border-2 rounded-xl w-14 h-7 bg-gradient-to-r from-white to-r to-black outline-none mt-[410px] ">
           <input type="checkbox" className="w-6 align-top focus:outline-none filter-none checked:bg-white  cursor-pointer h-6 rounded-[50%] bg-yellow-400  checked:ml-7 appearance-none focus:float-left ease-in duration-300" />
         </div>
         <a href="https://github.com/dev-subin"><i class="fa-brands fa-github fa-2xl mt-[424px] ml-10"></i></a>
       </div>
     
      </div>
      <div>
        <div className="flex justify-center place-content-between mt-36">
        <div className="border-2 text-gray-700  bg-white w-8/12 rounded-full h-12 flex flex-row place-content-between">
        <div>
        <i className="fa-solid fa-magnifying-glass fa-xl ml-5 "> </i>
        <input type="text"  placeholder="search for location" className="outline-none text-2xl pt-2 ml-4"/>
        </div>
       <div>
       <i className="fa-regular fa-location-arrow fa-xl mr-5 mt-5 "></i>
       </div>
        </div>
        </div>
      </div>
      <p className="text-center mt-10 text-lg text-gray-700">Developed by <a href="https://github.com/dev-subin"> <span className="underline"> Subin Sabu</span></a></p>
    </div>
  );
};

export default WeatherApp;
