import useScrollDetect from "../hooks/useScrollDetect";
import Styles from "./ScrollDetect.module.scss";

const ScrollDetect = () => {
   const scrolldetect =  useScrollDetect()
  return (
      <div className={Styles.ScrollDetect}>
          <p>ScrollDetected {scrolldetect}</p>
          <h1>ScrollDetect INterview QA</h1>
      </div>
  )
}

export default ScrollDetect