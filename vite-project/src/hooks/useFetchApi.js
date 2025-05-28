import { useEffect, useState } from "react";

const useFetchApi = (API_URL) => {
    const [response, setresponse] = useState([])
    const [error, seterror] = useState({})
    const [isloading, setisloading] = useState(false);

    useEffect(() => {
     const getData = async()=>{
        try {
            setisloading(true)
            const res = await fetch(API_URL);
            const data = await res.json()
            setresponse(data) 
            
            
        } catch (error) {
            console.log(error);            
            seterror(error)
            
        }finally{
                setisloading(false)
        }
     }
     getData()
    
    }, [])
    
  return {
isloading,
response,
error
  }
}
export default useFetchApi