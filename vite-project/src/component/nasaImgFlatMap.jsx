import { useEffect, useState } from "react"

const NasaImgFlatMap = () => {
const [imgData, setimgData] = useState([])
useEffect(() => {
  const getImg = async()=>{
      try {
          const res = await fetch('https://images-api.nasa.gov/search?q=moon')
          const data = await res.json()
        //   console.log(data);   
          const imgUrl = data.collection.items.flatMap((elm) => elm.links?.filter((elm) => elm.render === "image").map(link => link.href))  
          setimgData(imgUrl)
       
      } catch (error) {
          console.log(error.message);
        
      }
      
  }
    getImg()
    
    

}, [])
    // console.log(imgData);
    
  return (
    
  <>
  <h1>Nasa Images</h1>
  <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
  {imgData.map((item,index)=>{
    return <img src={item} alt="item img" width={200} key={index} style={{height:200,objectFit:'cover',objectPosition:'center',aspectRatio:'3/2',borderRadius:'8px'}}/>
  })
}
</div>
  </>
  )
}
export default NasaImgFlatMap