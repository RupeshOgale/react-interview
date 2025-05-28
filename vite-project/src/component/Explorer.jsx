import { useState } from "react";
import Styles from "./Explorer.module.scss";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
const Explorer = ({ data }) => {
    const [isExpand, setisExpand] =  useState(false)
  return (
    <>
          <main className={Styles.Explorer}>
              <p onClick={() => { setisExpand(prev => !prev) }} data-isFolder={data.isfolder}> {data.isfolder ? isExpand ? <MdOutlineKeyboardArrowUp /> :<MdOutlineKeyboardArrowDown />  :''} {data.name}</p>
              {isExpand ? data.isfolder && <div className={Styles.inner}>
              {data.items.map((item, index) => <Explorer key={index} data={item}/>)}
          </div> :''}
          </main>
    </>
  )
}

export default Explorer