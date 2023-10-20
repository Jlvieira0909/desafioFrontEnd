import Characters from '../img/characters.svg'
import Planets from '../img/planets.svg'
import Species from '../img/species.svg'
import Ships from '../img/ships.svg'
import axios from 'axios';
import React from 'react';
import { Divider } from 'antd';
import { Input, Space } from 'antd';

export default function Cards(){
const { Search } = Input;

const characterCounter = document.getElementById("charactersID");
const planetCounter = document.getElementById("planetsID");
const specieCounter = document.getElementById("speciesID");
const shipCounter = document.getElementById("shipsID");

fillCounters();

function fillCounters(){
  Promise.all([
    swapiGet("people/"), 
    swapiGet("planets/"),
    swapiGet("species/"),
    swapiGet("starships/")])
  .then(function (results) {
    console.log(results);
    // characterCounter.innerHTML = results[0].data.count;
    // planetCounter.innerHTML = results[1].data.count;
    // specieCounter.innerHTML = results[2].data.count;
    // shipCounter.innerHTML = results[3].data.count;
  });
}

function swapiGet(param){

return axios.get(`https://swapi.dev/api/${param}`);
}

  return(
        <div className='DataSearch'>
          <div className='SearchCards'>
            <div className='Card'>
              <h3 className='CardTitle'>Pessoas</h3>
                <div className='CardContent'>
                  <img src={Characters}/>
                  <h1 className='CurrentData' id="charactersID">000.00</h1>  
                </div>
            </div>
            <div className='Card'>
              <h3 className='CardTitle'>Planetas</h3>
                <div className='CardContent'>
                  <img src={Planets}/>
                  <h1 className='CurrentData' id="planetsID">000.00</h1>  
                </div>
            </div>
            <div className='Card'>
              <h3 className='CardTitle'>Espécies</h3>
                <div className='CardContent'>
                  <img src={Species}/>
                  <h1 className='CurrentData' id="speciesID">000.00</h1>  
                </div>
            </div>
            <div className='Card'>
              <h3 className='CardTitle' >Naves</h3>
                <div className='CardContent'>
                  <img src={Ships}/>
                  <h1 className='CurrentData' id="shipsID">000.00</h1>  
                </div>
            </div>
          </div> 
        {/* Table */}
        
        </div>
    )

}