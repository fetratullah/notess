//"use strict";
//Namn: Fetratullah Momand
//ID: AF7497

import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [spelarensName, setSpelarensName] = useState([]);
  const [spelarensBild, setSpelarensBild] = useState([]);

  const fetchData = () => {  
    /**
     * there is tow API, one is för the players name and the other is för
     * the picture of the player 
     * för the name of player: there is an id för evry player that you can se in first link
     * ass LeBron has id 237, in the same way in the link picture is the last one (203507)
     * the key for the picture that i printed. 
     */
    const spelareAPI = "https://www.balldontlie.io/api/v1/players/237";
    const spelareBild = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png";

    const getNBAPIPlayer = axios.get(spelareAPI)
    const getPlayerPic = axios.get(spelareBild)
    axios.all([getNBAPIPlayer, getPlayerPic]).then(
      axios.spread((...allData) => {
        const allDataPlayer = allData[0].data.first_name;
        const getNBAPIPlayerPic = allData[1].config.url;

        setSpelarensName(allDataPlayer)
        setSpelarensBild(getNBAPIPlayerPic)

      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
       Spelarens Namn Är : {spelarensName}
      <img src={spelarensBild}/>

    </div>
  );
}

export default App;
