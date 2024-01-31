import ReactDOM from 'react-dom/client'
import {getAll} from './services/connections.js'
import Rout from "./pages/router.js"

getAll().then(response => {
  localStorage.clear();
  ReactDOM.createRoot(document.getElementById('root')).render(<Rout eventos={response} />)
}).catch(error =>{
  console.log("Erro do servidor");
})