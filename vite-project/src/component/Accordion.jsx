import { useState } from "react"
import Styles from "./Accordion.module.scss";
import { MdArrowDownward, MdArrowUpward, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = ({ data }) => {
    const [isExpand, setisExpand] = useState(false)
    const [activeIndex, setactiveIndex] = useState(0)
    const handelAccordion = (index) => {
        setisExpand((prev) => !prev)
        isExpand && activeIndex === index ? setactiveIndex(null) : setactiveIndex(index)
       
        
    }
    return (

        <div className={Styles.Accordion_wrap}>
            {data.map((elm,index) => {
                return <div className={Styles.Accordion} key={index}>
                    <h1 onClick={() => { handelAccordion(index) }}>{elm.title} {activeIndex === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</h1>
                    {activeIndex === index && <p>{elm.text}</p>}

                </div>
            })}
        </div>
    )
}

export default Accordion