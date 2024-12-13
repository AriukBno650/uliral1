import { useRouter } from "next/router";

export default function hhh(){
    const router = useRouter();
     return(
        <div className="h-screen w-screen bg-black overflow-y-scroll overflow-x-hidden flex flex-col  items-center">
            <div className="w-full h-2/3 bg-black flex justify-around items-center">
            <div className="h-full w-3/5 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] "></div>
            <div className="h-full w-2/5 bg-white flex flex-col items-start  justify-center">
            <h1 className="text-black font-bold text-5xl translate-x-20 -translate-y-10 font-mono">Hi I'm Ariunbayar. 
            </h1>
            <p className="text-gray-600  text-xl translate-x-20 -translate-y-10 font-mono">And my job is to make this website.</p>
            <button className=" bg-black text-white font-mono px-5 py-2 border rounded-lg translate-x-20 -translate-y-5 hover:shadow-xl hover:bg-gray-900" >Here are my projects</button>
            </div>
            </div>
            <div className="w-full h-1/3 bg-gray-900 flex flex-col justify-around items-center">
            <h1 className="text-2xl text-white font-semibold font-mono ">My projects</h1>
            <div className="w-full flex  items-center justify-center ">
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.push("cv")} >CV</button>
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.push("tsagagaar")} >Weather</button>
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.push("color")}>Color</button>
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.push("data2")}>Search</button>
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.push("data")}>Grid</button>
            </div>
            </div>
        </div>
     );
}