import React, {useState} from "react";
import { useRouter } from "next/router";


export default function ID() {
  const router = useRouter();
    const [data, setData] = useState({
      touristAttractions: [],
      clothes: [],
      instruments: [],
      provinces: [],
      historicalTools: [],
      ethnicGroups: [],
      historicalFigures: [],
    });
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
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
          setData({
            touristAttractions: result.touristAttractions,
            clothes: result1.clothes,
            instruments: result2.instruments,
            provinces: result3.provinces,
            historicalTools: result4.historicalTools,
            ethnicGroups: result5.ethnicGroups,
            historicalFigures: result6.historicalFigures,
          });
        } catch (error) {
          console.log(error);
        }
      };
 
      fetchData();
    }, []);
  return (
    <div className="w-full h-full bg-gray-400 "></div>
  );
};

