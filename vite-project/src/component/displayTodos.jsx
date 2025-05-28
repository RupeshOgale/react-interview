import { useEffect, useState } from "react";
import Classes from "./displayTodos.module.scss";
import { MdArrowForward, MdArrowLeft, MdSkipPrevious } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const DisplayTodos = () => {
    const [todosData, settodosData] = useState([])
    const [seachText, setseachText] = useState('')
    const [selectedTodosId, setselectedTodosId] = useState(null)
    const [editTitle, seteditTitle] = useState('')
    const [selectSatus, setselectSatus] = useState('')
    const [currentIndex, setcurrentIndex] = useState(1)
    const [pageSize, setpageSize] = useState(10)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>{
            settodosData(data)
        }).catch(error=>{
            console.log(error.message);            
        })   
      
    }, [])

    const filterdTodos = todosData.filter(todo=>{
        return  todo.title.toLowerCase().includes(seachText)
    })

    const handelEdit = (todo)=>{
        setselectedTodosId(todo.id)
        seteditTitle(todo.title)
    }
    const handleUpdate = (id)=>{
       settodosData(prevTodos=>{
          return  prevTodos.map(todo => todo.id === id ? { ...todo, title:editTitle,completed:selectSatus}:todo)
       })
        setselectedTodosId(null)
    }
    const totalPages = Math.ceil(todosData.length / pageSize)
    const firstIndex = (currentIndex - 1) * pageSize
    const lastIndex = firstIndex + pageSize
    const paginatedData = filterdTodos.slice(firstIndex,lastIndex)

    const handelPagination =(index)=>{
        setcurrentIndex(index)
    }
    const handlePrev = ()=>{
        if (currentIndex > 1) {
            setcurrentIndex(prev => prev - 1)
        }
    }
    const handelNext =()=>{
        if (currentIndex < totalPages) {
            setcurrentIndex(prev => prev + 1)
        }
    }
  return (
    <div className={Classes.displayTodos}>
          <input type="text" name="seach" placeholder="search by title" value={seachText} onChange={(e)=> setseachText(e.target.value)} />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  {paginatedData.map((todo)=>{
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{selectedTodosId === todo.id ? <input value={editTitle} onChange={(e)=>seteditTitle(e.target.value)}/> : todo.title}</td>
                        <td>{selectedTodosId === todo.id ? <select onChange={(e) => setselectSatus(e.target.value === 'Yes')}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select> : todo.completed ? 'Yes' : "No"}</td>
                        <td>
                            {selectedTodosId === todo.id ? <button type="button" onClick={() => handleUpdate(todo.id)}>Done</button> : <button type="button" onClick={() => handelEdit(todo)}>Edit</button>}
                            </td>
                    </tr>
                 })}
            </tbody>
        </table>
          <div className={Classes.pagination}>
              <button type="button" onClick={handlePrev}><AiOutlineLeft /></button>
              {Array.from({ length: totalPages }, (_, index) => <button type="button" onClick={() => handelPagination(index + 1)}>{index +1}</button>)}
              <button onClick={handelNext}><AiOutlineRight /></button>
        </div>
    </div>
  )
}
export default DisplayTodos