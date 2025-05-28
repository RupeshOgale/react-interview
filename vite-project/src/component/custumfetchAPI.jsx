import useFetchApi from "../hooks/useFetchApi"

const CustumfetchAPI = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users'
    const {isloading,response,error} = useFetchApi(API_URL);
    console.log(error);
    

   
    
  return (
      <div>
          {isloading && <p>Loading...</p> }
          {error && <p>{error.message}</p> }
        {response.map(elm => {
        return <p key={elm.id}>{elm.name}</p>
    })}      </div>
  )
}
export default CustumfetchAPI