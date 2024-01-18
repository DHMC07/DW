import { useState, useEffect } from 'react'
import axios from 'axios'

import {
  APIProvider,
  Marker,
  Map,
} from "@vis.gl/react-google-maps";

const App = () => {

  const [newAd, setAd] = useState({lat: 38.7245447, lng: -9.1457366})
  const [newinput, setinput] = useState("amora,lisboa")

  const ChangeAd = (event) => {
    event.preventDefault()

    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json?address='+newinput.replace(" ", "%")+'&key=AIzaSyD7tIANYEbsVlVcCG4QWrwMs6xyoXmi1sk')
      .then(response => {
        setAd(response.data.results[0].geometry.location)
    })

  }

  const handleNoteChange = (event) => {
    event.preventDefault()
    setinput(event.target.value)
  }

  return (
    <APIProvider apiKey={'AIzaSyD7tIANYEbsVlVcCG4QWrwMs6xyoXmi1sk'}>

      <div style={{ height: "50vh", width: "50%" }}>
        <h4>Event locations in your area</h4>
        <form onSubmit={ChangeAd}>
          <input
            onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form> 
        <Map zoom={15} center={newAd}>
        < Marker position={newAd} />
        </Map>
      </div>
      
    </APIProvider>
  );
}

export default App;
