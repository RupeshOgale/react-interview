import { forwardRef, useImperativeHandle, useRef } from "react"

const ImperativeInput = forwardRef((_props,ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref,()=>{
        return{
            focus:()=>inputRef.current.focus(),
            clear:()=>inputRef.current.value = ''
        }
    })
  return (
      <input type="text" ref={inputRef}/>
  )
})
export default ImperativeInput