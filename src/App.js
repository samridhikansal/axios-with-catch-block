import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./style.css";

export default function App() {
  const [countries,setCountries]= useState([]);
  const [load, setLoad]= useState(true)
  const [errors, setErrors]= useState([])

  useEffect ( ()=>{ 
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(res=>{
                  setCountries(res.data);
                  setLoad(true)
               } )
    .catch(err=> {setErrors(err.message) ; setLoad(false)})
    
    }, [])

    

  return (
    <div>
      <h1>Hello</h1>
      { load && countries.map( (country, index) => { return <li key ={country.id}>{country.name}</li>})}   
    {
      errors&& errors.map( error=>{ <li>{error}</li>})
    }
      
    </div>
  );
}
