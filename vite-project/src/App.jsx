import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TraficLight from './component/traficLight'
import Explorer from './component/Explorer'
import { data } from "./data/data";
import ScrollDetect from './component/ScrollDetect'
import Accordion from './component/Accordion'
import Timer from './component/timer'
import SearchDropdown from './component/searchDropdown'
import searchdata from "./data/searchData.json";
import Navigation from './component/navigation'
import SelectCountry from './component/SelectCountry'
import {data as countryData} from "./data/selectCountry";
import FootballMatches from './component/FootballMatches'
import Pagination from './component/Pagination'
import DisplayTodos from './component/displayTodos'
import NasaImgFlatMap from './component/nasaImgFlatMap'
import ImperetiveHandle from './component/imperetiveHandle'
import CustumfetchAPI from './component/custumfetchAPI'

function App() {
  const [count, setCount] = useState(0)

  const accrdianData = [
    { title: "heading 1", 
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, rerum cupiditate! Corrupti eius, sapiente illo aliquid iste quia aspernatur eos eaque nostrum. Laudantium quod magnam esse, corporis iste veniam? Tempora." },
    {
      title: "heading 2",
      text: "Lorem ipsum, dolor sit amrum. Laudantium quod magnam esse, corporis iste veniam? Tempora."
    }, {
      title: "heading 3",
      text: "Lorem ipsum, dolor sit amrum. Laudantium quod magnam esse, corporis iste veniam? Tempora."
    }
  ]
  const navData = ['heading 1', 'heading 2', 'heading 3','heading 4']

  return (
    <>
      {/* Build a simple Traffic Light component */}
      {/* <TraficLight /> */}


      {/* <Explorer data={data}/> */}
      {/* <ScrollDetect /> */}

      {/* <Accordion data={accrdianData} /> */}
      {/* <Timer /> */}
      {/* <SearchDropdown data={searchdata}/> */}
      {/* <Navigation data={navData}/> */}
      {/* <SelectCountry data={countryData}/> */}
      {/* <FootballMatches /> */}
      {/* <Pagination /> */}
      {/* <DisplayTodos /> */}
      {/* <NasaImgFlatMap /> */}
      <ImperetiveHandle/>
      {/* <CustumfetchAPI /> */}
    </>
  )
}

export default App
