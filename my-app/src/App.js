"use client";

import {
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";

const App = () => {
  const position = { lat: 38.7245447, lng: -9.1457366};

  return (
    <APIProvider apiKey={'AIzaSyD7tIANYEbsVlVcCG4QWrwMs6xyoXmi1sk'}>
    
      <div>
        <h4>Event locations in your area</h4>
      </div>
      <div class="my-2">
        <form>
          <label for="zip">Search by city/address:</label>
          
          <button type="submit" value="Encode" id="button" onclick="handleSubmit(event)" class="btn btn-secondary">Search</button>
        </form>
      </div>

      <div style={{ height: "50vh", width: "50%" }}>
        <Map zoom={15} center={position}>

        </Map>
      </div>
      
    </APIProvider>
  );
}

export default App;
