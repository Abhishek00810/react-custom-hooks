import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (url)=>
{
    const [Data, setData] = useState('');
  const [Loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchdata = async()=>{
          try{
            const response = await axios.get(url);
            setData(response.data);
          }
          catch{
            setData("Error while sending data");
          }
          finally{
            setLoading(false);
          }
        }
        fetchdata();
    }, [url]);
    return {Data, Loading};
}