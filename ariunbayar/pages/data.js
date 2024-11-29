import { useState } from "react";

export default function Data(){
    var[grid , setGrid] = useState(false);

    const data = [
        {
            "id":1, 
            "title": "Title 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",

        },
        {
            "id":2, 
            "title": "Title 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",

        },
        {
            "id":3, 
            "title": "Title 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",

        },
        {
            "id":4, 
            "title": "Title 4",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",

        },
        

    ];
    return(
        <div className="h-screen w-screen flex bg-white flex-col items-center ">
            <div className="h-1/6 w-full flex justify-around items-center">
            <h1 className="text-black font-bold text-2xl ">Titles</h1>
            <button className="bg-blue-600 flex justify-center items-center text-black h-12 w-28 border rounded-xl" onClick={() => {setGrid(!grid)}}>
                {grid ? "Hide Grid" : "Show Grid"}
            </button>
            </div>
            <div className="w-2/3 h-5/6 flex flex-col items-center">
            <div className= {grid == true? " items-center  grid-cols-2 grid gap-6" : "space-y-4"}>
                {data.map((data, index) => {return <div key={index} className=" px-4 py-8 flex flex-col border border-black rounded-xl text-black"> 
                    <h1 className="text-xl font-bold text-black ">{data.title}</h1>
            
                    <p className="text-black">{data.description}</p>
                </div>
            })}
            </div>
            </div>
        </div>
    );
}