
import { useRouter } from "next/router";


export default function tsagagaar() {
    const router = useRouter();
    return (
        <body class="w-full h-screen flex items-center justify-center bg-slate-900">
          <div class="w-[98%] h-[96%] flex justify-between items-end">
              <div class="w-24 h-full bg-slate-700 rounded-3xl flex flex-col items-center">
                  <div class="w-12 h-12 rounded-full bg-slate-800 mt-4 flex items-center justify-center">
                  <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.back()}>Back</button>

                  </div>
                  <div class="w-full h-full mt-8 flex flex-col items-center">
                      <div class="w-24 h-24 flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-12">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                          </svg>
                          <h1 class="text-white text-md">Weather</h1>
                      </div>
                      <div class="w-24 h-24 flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="w-12 fill-white">
                              <path fill-rule="evenodd"
                                  d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z"
                                  clip-rule="evenodd" />
                          </svg>
                          <h1 class="text-white text-md">Cities</h1>
                      </div>
                      <div class="w-24 h-24 flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="w-12 fill-white">
                              <path fill-rule="evenodd"
                                  d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
                                  clip-rule="evenodd" />
                          </svg>
      
                          <h1 class="text-white text-md">Map</h1>
                      </div>
                      <div class="w-24 h-24 flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="w-12 fill-white">
                              <path
                                  d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                          </svg>
      
                          <h1 class="text-white text-md">Settings</h1>
                      </div>
                  </div>
              </div>
              <div class="w-2/3 h-full rounded-3xl">
                  <div class="w-full h-16 bg-slate-700 rounded-3xl flex items-center">
                      <h1 class="text-white text-md ml-6">Search for cities</h1>
                  </div>
                  <div class="w-full h-80 flex items-center justify-end relative">
                      <h1 class="absolute top-16 left-16 text-center"><span
                              class="text-4xl text-white font-semibold">Ulaanbaatar</span><span
                              class="text-slate-400">Chance of rain: 0%</span></h1>
                      <img src="https://freesvg.org/img/1364063978.png"
                          class="h-2/3 mr-16"/>
                      <h1 class="text-6xl absolute left-16 bottom-16 font-bold text-white">16°</h1>
                  </div>
                  <div class="w-full h-64 bg-slate-700 rounded-3xl flex items-end justify-center relative">
                      <h1 class="text-slate-400 absolute left-8 font-semibold top-4">TODAY'S FORECAST</h1>
                      <div class="w-11/12 h-2/3 mb-8 grid grid-cols-6">
                          <div class="flex flex-col items-center">
                              <h1 class="text-slate-400 font-semibold">6:00 AM</h1>
                              <img src="https://freesvg.org/img/weather-overcast.png" class="mt-4 w-2/3"/>
                              <h1 class="text-white font-bold text-3xl">2°</h1>
                          </div>
                          <div class="flex flex-col items-center">
                              <h1 class="text-slate-400 font-semibold">9:00 AM</h1>
                              <img src="https://freesvg.org/img/weather-overcast.png" class="mt-4 w-2/3"/>
                              <h1 class="text-white font-bold text-3xl">10°</h1>
                          </div>
                          <div class="flex flex-col items-center">
                              <h1 class="text-slate-400 font-semibold">12:00 PM</h1>
                              <img src="https://freesvg.org/img/1364063978.png"
                                  class="mb-2 mt-2 w-2/3"/>
                              <h1 class="text-white font-bold text-3xl">14°</h1>
                          </div>
                          <div class="flex flex-col items-center">
                              <h1 class="text-slate-400 font-semibold">3:00 PM</h1>
                              <img src="https://freesvg.org/img/weather-showers.png"
                                  class="mt-2 mb-2 w-2/3"/>
                              <h1 class="text-white font-bold text-3xl">16°</h1>
                          </div>
                          <div class="flex flex-col items-center">
                              <h1 class="text-slate-400 font-semibold">6:00 PM</h1>
                              <img src="https://freesvg.org/img/sivvus_weather_symbols_2.png"
                                  class="mt-2 mb-2 w-2/3"/>
                              <h1 class="text-white font-bold text-3xl">12°</h1>
                          </div>
                          <div class="flex flex-col items-center">
                              <h1 class="text-slate-400 font-semibold">9:00 PM</h1>
                              <img src="https://freesvg.org/img/weather-overcast.png" class="mt-4 w-2/3"/>
                              <h1 class="text-white font-bold text-3xl">6°</h1>
                          </div>
                      </div>
                  </div>
                  <div class="w-full h-60 bg-slate-700 rounded-3xl mt-4 relative flex flex-col justify-end">
                      <h1 class="text-white absolute left-8 font-semibold top-4">AIR CONDITIONS</h1>
                      <div
                          class="bg-slate-900 text-white rounded-full h-8 w-24 items-center flex justify-center absolute top-4 right-8">
                          See More</div>
                      <div class="w-full h-2/3 grid grid-cols-4">
                          <div class="relative flex flex-col items-center justify-center">
                              <h1 class="text-slate-400 left-8 font-semibold top-4 text-md">Real Feel</h1>
                              <h1 class="text-white font-bold text-3xl mb-8">6°</h1>
                          </div>
                          <div class="relative flex flex-col items-center justify-center">
                              <h1 class="text-slate-400 left-8 font-semibold top-4 text-md">Wind</h1>
                              <h1 class="text-white font-bold text-3xl mb-8">5.4 km/h</h1>
                          </div>
                          <div class="relative flex flex-col items-center justify-center">
                              <h1 class="text-slate-400 left-8 font-semibold top-4 text-md">Chance of Rain</h1>
                              <h1 class="text-white font-bold text-3xl mb-8">0%</h1>
                          </div>
                          <div class="relative flex flex-col items-center justify-center">
                              <h1 class="text-slate-400 left-8 font-semibold top-4 text-md">UV Index</h1>
                              <h1 class="text-white font-bold text-3xl mb-8">3</h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="w-1/4 h-[93%] bg-slate-900 rounded-3xl relative flex items-end">
                  <h1 class="absolute left-8 top-4 text-slate-400 font-semibold">7-DAY FORECAST</h1>
                  <div class="w-full h-[90%]">
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Today</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://freesvg.org/img/1364063978.png"
                                  class="w-12"/>
                              <h1 class="font-bold text-white ">Sunny</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">16</span>/2</h1>
                      </div>
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Tue</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://freesvg.org/img/1364063978.png  "
                                  class="w-12"/>
                              <h1 class="font-bold text-white ">Sunny</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">24</span>/4</h1>
                      </div>
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Wed</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://freesvg.org/img/1364063978.png"
                                  class="w-12"/>
                              <h1 class="font-bold text-white ">Sunny</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">14</span>/5</h1>
                      </div>
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Thu</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" class="w-12"/>
                              <h1 class="font-bold text-white ">Cloudy</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">20</span>/1</h1>
                      </div>
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Fri</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" class="w-12"/>
                              <h1 class="font-bold text-white ">Cloudy</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">22</span>/7</h1>
                      </div>
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Sat</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" class="w-12"/>
                              <h1 class="font-bold text-white ">Cloudy</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">25</span>/6</h1>
                      </div>
                      <div class="w-full h-[12.8%] flex items-center justify-evenly">
                          <h1 class="text-slate-400 font-semibold">Sun</h1>
                          <div class="w-1/3 h-full flex items-center justify-evenly">
                              <img src="https://cdn-icons-png.flaticon.com/512/1566/1566424.png" class="w-12"/>
                              <h1 class="font-bold text-white ">Stormy</h1>
                          </div>
                          <h1 class="font-bold text-slate-400"><span class="text-white">12</span>/-2</h1>
                      </div>
                  </div>
              </div>
          </div>
      </body>
    );
  }
