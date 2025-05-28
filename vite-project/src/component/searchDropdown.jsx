import { useEffect, useState } from "react";


const SearchDropdown = ({data}) => {
    const [filtersubjects, setfilterSubjects] = useState(data);
    const [text, settext] = useState('');
      
   useEffect(() => {
       const lowerCasetEXT = text.toLocaleLowerCase()
      const filterdData =  filtersubjects.filter((item)=>{
           return (item.subject_id.toLocaleLowerCase().includes(lowerCasetEXT) ||
               item.subject.toLocaleLowerCase().includes(lowerCasetEXT) ||
               item.description.toLocaleLowerCase().includes(lowerCasetEXT))
       })
   
       lowerCasetEXT ? setfilterSubjects(filterdData) : setfilterSubjects(data)
   }, [text])
   
    
    
  return (
    <>
          <input type="text" placeholder="search..." onChange={(e) => { settext(e.target.value) }} value={text}/>
    <ul>
              {filtersubjects.map((itesm)=>{
                  return <li key={itesm.subject_id}>{itesm.subject} <br /> {itesm.subject_id} <br />{itesm.description}</li>
              })}
    </ul>
    </>
  )
}
export default SearchDropdown