import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function timer(){
    const router = useRouter();
    const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    if(time==60){
        setTime(0);
    }
  }, [time]);
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p className="text-black">{time}</p>
        <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.back()}>Back</button>

    </div>
  );
}