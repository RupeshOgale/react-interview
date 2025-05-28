import { useEffect, useRef, useState } from "react"

 const useScrollDetect = () => {
    const [scrollDirection, setscrollDirection] = useState('');
    const prevScroll = useRef()
    useEffect(() => {
        window.addEventListener('scroll', scrollDetect)
        
        return () => {
          window.removeEventListener('scroll', scrollDetect)
        
      }
    }, [])

    function scrollDetect() {
        prevScroll.current > window.scrollY ? setscrollDirection('UP'):setscrollDirection('DOWN')
     prevScroll.current = window.scrollY
    }
    
     return scrollDirection
}
export default useScrollDetect