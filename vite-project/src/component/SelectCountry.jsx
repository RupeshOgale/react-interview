import { useState } from "react";

const SelectCountry = ({ data }) => {
    const [selectedCountry, setselectedCountry] = useState('')
    const [selectedstates, setselectedstates] = useState('')
    const [selectedCity, setselectedCity] = useState('')
    const countryData = Object.keys(data.countries);
    const statesData = Object.keys(data.states).filter(state => data.states[state].country === selectedCountry)
    const cityData = Object.keys(data.cities).filter(city => data.cities[city].country === selectedCountry && data.cities[city].state === selectedstates )
   
    
const handelSelectCountry = (e)=>{
    e.preventDefault();    
    setselectedCountry(e.target.value)
}
const handelSelectStates = (e)=>{
    e.preventDefault();    
    setselectedstates(e.target.value)
}
const handelSelectCity = (e)=>{
    e.preventDefault();    
    setselectedCity(e.target.value)
}


    return (
        <>
            <h2>Select countr, state, city</h2>
            <div>
                <select value={selectedCountry} onChange={handelSelectCountry}>
                    <option value={''}>select Country</option>
                    {countryData.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
                <select value={selectedstates} disabled={!selectedCountry} onChange={handelSelectStates}>
                    <option value={''}>select State</option>
                    {statesData.map(state => <option key={state} value={state}>{state}</option>)}
                </select>
                <select value={selectedCity} disabled={!selectedstates} onChange={handelSelectCity}>
                    <option value={''}>select city</option>
                    {cityData.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
            </div>
        </>
    )
}
export default SelectCountry