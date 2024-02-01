import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import { useState} from 'react'

const Admin = (props) => {

    const [newAd, setAd] = useState(props.eventos.location)
    const eventos = props.eventos

    const change_local = (event, location) => {
        event.preventDefault()
        setAd(location)
    }
    
    return (
        <div>

            <div className="sidenav">
                {eventos.map(eventos =>
                    <li key={eventos._id}>
                        <form onSubmit={event => change_local(event, eventos.location)}>
                            <button type="submit"> {eventos.nome}</button>
                        </form>
                    </li>
                )
                }
            </div>
            <Link to="/">retornar a página inicial</Link>
            <h4>ID:</h4>
            <h4>User:</h4>

            <div className="column form-column">
                <h2>Formulário</h2>
                <form>
                    {/* Conteúdo do formulário aqui */}
                    <label htmlFor="fname">Nome:</label>
                    <input type="text" id="fname" name="fname" /><br /><br />
                    <label htmlFor="lname">Sobrenome:</label>
                    <input type="text" id="lname" name="lname" /><br /><br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default Admin;