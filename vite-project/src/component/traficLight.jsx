import { useEffect, useState } from "react";
import Styles from "./traficLight.module.css";

const TraficLight = (props) => {
  const [active, setactive] = useState('red')
  useEffect(() => {
    
    
    switch (active) {
      case 'red':
        setTimeout(() => {
          setactive('yellow')
        }, 1000);
        break;
      case 'yellow':
        setTimeout(() => {
          setactive('green')
        }, 2000);
        break;
      case 'green':
        setTimeout(() => {
          setactive('red')
        }, 3000);
    
    
    }
  
  
  }, [active])
  
  return (
      <div className={Styles.traficLight}>
      <h1 id={Styles.red} style={{ opacity: active === 'red' ? 1:0.5}}>red</h1>
      <h1 id={Styles.green} style={{ opacity: active === 'green' ? 1 : 0.5 }}>green</h1>
      <h1 id={Styles.yellow} style={{ opacity: active === 'yellow' ? 1 : 0.5 }}>yellow</h1>
      </div>
  )
}

export default TraficLight