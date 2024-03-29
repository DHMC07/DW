import { useState} from 'react'
import './App.css'
import {get_locations, get_user} from './services/connections.js'
import {
  APIProvider,
  Marker,
  Map,
} from "@vis.gl/react-google-maps";

const App = (props) => {
  
  const [newAd, setAd] = useState(props.eventos[0].location)
  const [newinput, setinput] = useState("")
  const [info_user, new_info_user] = useState("")
  const eventos = props.eventos
  const code = new URLSearchParams(window.location.search).get('code');
  
  const ChangeAd = (event) => {
    event.preventDefault()

    get_locations(newinput.replace(" ", "%"))
    .then(response => {setAd(response)})
  }

  const handleNoteChange = (event) => {
    event.preventDefault()
    setinput(event.target.value)
  }

  const change_local = (event, location) => {
    event.preventDefault()
    setAd(location)
  }

  return (
    <APIProvider async apiKey={"AIzaSyCbE28kdcyFgj2wchjwMtS9j-SGbj2F72s"}>

      <div className="sidenav">
        {eventos.map(eventos=>
          <li key = {eventos._id}>
            <form onSubmit = {event => change_local(event,eventos.location)}>
              <button type="submit"> {eventos.content}</button>
            </form> 
          </li>
          )
        }
      </div>
      
      <div style={{ height: "50vh", width: "50%" }}>

        <h4>Event locations in your area</h4>
        <h4>ID: {info_user.id}</h4>
        <h4>User: {info_user.nome}</h4>

        <form onSubmit={ChangeAd}>
          <input
            onChange={handleNoteChange}
          />
          <button type="submit">Admin login</button>
        </form> 

        <form onSubmit={ChangeAd}>
          <input
            onChange={handleNoteChange}
          />
          <button type="submit">Pesquisar</button>
        </form> 

        <Map className="mapa" zoom={15} center={newAd}>
          {eventos.map(eventos=> 
            <li key = {eventos._id}>
              <Marker position={eventos.location}/>
            </li>
            )
          }
        </Map>
      </div>
      
    </APIProvider>
  );
}

export default App;