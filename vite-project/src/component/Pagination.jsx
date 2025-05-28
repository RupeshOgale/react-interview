import { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Pagination = () => {
    const [users, setusers] = useState([])
    const [size, setsize] = useState(5);
    const [curr, setcurr] = useState(0)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>{
            setusers(data)
        }).catch((error)=>{
            console.log(error.message);            
        })   
      
    }, [])

    const handelPrevious=()=>{
       if(curr > 0){
           setcurr((prev) => prev - 1)
       }
    }
    const handelNext=()=>{
        if (curr < Math.ceil(users.length   / size) -1 ) {
            setcurr((prev) => prev + 1)
        }
    }
    const startIndex = Math.ceil(curr * size);
    const lastEndex = Math.ceil(startIndex + size)
    
  return (
    <>
    {users.slice(startIndex,lastEndex).map((user,index)=>{
        return <p key={user.id}>{index + 1}: {user.name}</p>
    })}
          <p>{curr}</p>
    <div style={{display:'flex',gap:10}}>
        <button onClick={handelPrevious}><MdArrowLeft/></button>
        <button onClick={handelNext}><MdArrowRight/></button>
    </div>
    </>
  )
}
export default Pagination