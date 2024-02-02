import { useState} from 'react'
import {get_locations} from '../services/connections.js'
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import { compararSenha } from '../services/components.js';

import {
  APIProvider,
  Marker,
  Map,
} from "@vis.gl/react-google-maps";


const Home = (props) => {

  console.log(props)

  const [newAd, setAd] = useState(props.eventos.location)
  const [newinput, setinput] = useState("")
  const [newpassword, setpassword] = useState("")
  const [error, setError] = useState('');
  const eventos = props.eventos

  const ChangeAd = (event) => {
    event.preventDefault()
      get_locations(newinput.replace(" ", "%"))
      .then(response => {setAd(response)
      }).chatch(erro => {
        setError('Porfavor seja mais especifico na sua busca');
      })
  }
  

  const login_admin = () => {

    
  }

  const handle_local = (event) => {
    event.preventDefault()
    setinput(event.target.value)
  }

  const handle_pass = (event) => {
    event.preventDefault()
    setpassword(event.target.value)
  }

  return(
    <APIProvider async apiKey={"}>

      <div className="sidenav">
        {eventos.map(eventos=>
          <li key = {eventos._id}>
            <form onSubmit = {event => change_local(event,eventos.location)}>
              <button type="submit"> {eventos.nome}</button>
            </form> 
          </li>
          )
        }
      </div>
      
      <div style={{ height: "50vh", width: "50%" }}>

        <h4>Event locations in your area</h4>
        <Link to="/admin">Usuario</Link>

        <form onSubmit={login_admin}>
          <input type="password"
            onChange={handle_pass}
          />
          <button type="submit">Admin login</button>
        </form> 

        <form onSubmit={ChangeAd}>
          <input
            onChange={handle_local}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default Home;