import { useState } from "react"
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";

const Navigation = ({ data }) => {
    const [navigateData, setnavigateData] =  useState(data);
const handelMoveUp = (index)=>{
    if (index === 0) return;
    const tempData = [...navigateData]
    const tmp = tempData[index];
    tempData[index] = tempData[index - 1];
    tempData[index - 1] = tmp;
    setnavigateData(tempData)
}
const handelDown = (index)=>{
    if (index === navigateData.length - 1) return;
    const tempData = [...navigateData]
    const tmp = tempData[index];
    tempData[index] = tempData[index + 1];
    tempData[index + 1] = tmp;
    setnavigateData(tempData)
}
    
  return (
    <>
    <div style={{width:'25%'}}>
              {navigateData.map((elm, index)=>{
                 return <p key={index} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>{elm} 
              <div>
                         {index !== navigateData.length - 1 && <AiFillCaretDown style={{ cursor: 'pointer' }} onClick={() => { handelDown(index) }}/>}
                         {index !== 0 && <AiFillCaretUp style={{ cursor: 'pointer' }} onClick={() => { handelMoveUp(index) }}/>}
              </div>
                </p>
             })}
    </div>
    </>
  )
}
export default Navigation