import express from "express"
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";
import {Schema_evento, Schema_user, Schema_token} from "./esquema.js";
import axios from "axios"

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;
const url = "mongodb+srv://ruivaldofoxrs:ruivaldo_2001@cluster0.yv3if9v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

app.get("/", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=51a74380631b8073acc7`);
})


app.get('/api/locations', async(request, response) => { 
    try{
        const database = client.db("eventos").collection("locations");
        const local = await database.find().toArray();
        response.json(local);
    }
    catch{console.log("erro");}
});

app.get('/api/admin', async(request, response) => { 
    try{
        const database = client.db("eventos").collection("admin");
        const local = await database.find().toArray();
        response.json(local);
    }
    catch{console.log("erro");}
});

app.post('/api/locations', async(req, res) => { 
    try{
        const evento = Schema_evento(req.body.nome, req.body.descricao, req.body.endereco, req.body.locations, req.body.data) 
        const database = client.db("eventos").collection("locations");
        const local = await database.insertOne(evento);
        res.json(local);
    }
    catch{console.log("erro");}
});

app.post('/api/admin', async(req, res) => { 
    try{
        const database = client.db("eventos").collection("admin");
        const existingUser = await database.findOne({ id: req.body.id });
        if (!existingUser) { 
            const ok = await database.insertOne(req.body)
            res.json(ok)
        }else{
            res.json(existingUser)
        }
    }
    catch{console.log("erro1");}
});


app.delete('/api/locations/:id', async(req, res) => { 
    try{
        const database = client.db("eventos").collection("locations");
        const local = await database.deleteOne({ "_id": new ObjectId(req.params.id)});
        res.json(local);
        if (local.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
    }
    catch{console.log("erro");}
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });