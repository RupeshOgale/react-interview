import { useRef } from "react";
import ImperativeInput from "./imperativeInput";
const ImperetiveHandle = () => {
    const inputRef = useRef()
    const handelFocus = ()=>{
inputRef.current.focus()
    }
    const handleClear =()=>{
inputRef.current.clear()
    }
  return (
    <div>
          <ImperativeInput ref={inputRef}/>
          <button type="button" onClick={handelFocus}>Focus</button>
          <button type="button" onClick={handleClear}>Clear</button>
    </div>
  )
}
export default ImperetiveHandle