import { useEffect, useState } from "react";

const FootballMatches = () => {
    const [matches, setMatches] = useState([]);
    const [selectedYear, setselectedYear] = useState('');
    useEffect(() => {
        fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`).then((res) => res.json()).then((data) => {
            // console.log(data.data);
            setMatches(data.data)
        }).catch((error) => {
            console.log(error.message);
        })

    }, [selectedYear])

    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017]

    return (
        <div style={{ display: 'flex' ,gap:'50px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {years.map((year) => {
                    return <button onClick={() => setselectedYear(year)} key={year}>{year}</button>
                }) }
            </div>
       <div>
                <h2 style={{marginTop:0}}><b>Matches : {matches.length}</b></h2>
                {matches.length > 0 ? matches.map((matche,index)=>{
                    return <p key={index}>{matche.country}, {matche.name},{matche.runnerup},{matche.winner},{matche.year}</p>
                }) : selectedYear && <p>No matches found</p> }
       </div>
        </div>
    )
}
export default FootballMatches