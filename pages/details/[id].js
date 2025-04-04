import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query; 
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return; 

    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const response1 = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/instruments");
        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const response3 = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const result3 = await response3.json();
        const response4 = await fetch("https://mongol-api-rest.vercel.app/historicalTools");
        const result4 = await response4.json();
        const response5 = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
        const result5 = await response5.json();
        const response6 = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");
        const result6 = await response6.json();
        
        const combinedData = {
          touristAttractions: result.touristAttractions,
          clothes: result1.clothes, 
          instruments: result2.instruments,
          provinces: result3.provinces,
          historicalTools: result4.historicalTools,
          ethnicGroups: result5.ethnicGroups,
          historicalFigures: result6.historicalFigures,
        };

        const getItemById = (category) => {
          return combinedData[category]?.find(item => item.id === id);
        };

        const touristAttraction = getItemById('touristAttractions');
        const clothes = getItemById('clothes');
        const instruments = getItemById('instruments');
        const province = getItemById('provinces');
        const historicalTool = getItemById('historicalTools');
        const ethnicGroup = getItemById('ethnicGroups');
        const historicalFigure = getItemById('historicalFigures');

        const allData = {
          touristAttraction,
          clothes,
          instruments,
          province,
          historicalTool,
          ethnicGroup,
          historicalFigure
        };

        console.log(allData);
        setData(allData);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) return <p className="text-center text-gray-500 font-bold text-2xl ">Loading...</p>;

  return (
    <div className="w-screen h-screen bg-gray-400 flex justify-center items-center">
      <div className="bg-white w-3/4 h-3/4 rounded-xl flex flex-col items-center justify-center">
  
        {data.touristAttraction && (
          <div className="flex flex-col items-center mb-6">
            <img 
              src={data.touristAttraction.images || 'https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/326498436_1574880736364874_3080204893058889679_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GAP-FFnTzAYQ7kNvgETWHX2&_nc_oc=AdmGyZ0cWu_qcqu2TcCHodx5RZ4C3S0m3RFqGzvB-KKHlssUP7ke_YPo8DfJoLc62oM&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=V-h_VX1T1qOlkB3NoKjrpQ&oh=00_AYFUkCJnXPauJXkBRaBe7wloVyrwH5qEMFuxgkva-rHGpQ&oe=67ED91D8'}
              className="w-64 h-44 object-cover rounded-xl"
            />
            <h1 className="text-3xl font-bold text-black">{data.touristAttraction.name || 'No Name'}</h1>
            
            <p className="text-gray-500 mx-4 my-2 w-72 text-center text-xl">{data.touristAttraction.description || 'No description available'}</p>
          </div>
        )}

        

       
        
        <button className="bg-white text-black font-mono px-5 py-2 border rounded-lg hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() => router.back()}>Back</button>
      </div>
    </div>
  );
}
