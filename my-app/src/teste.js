import axios from "axios"

import bcrypt from "bcrypt"

const saltRounds = 10;

async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Contraseña hasheada:', hash);
    return hash;
}

const plainPassword = '12345';
const hashed = await hashPassword(plainPassword);


axios.post('http://localhost:3001/api/admin', {
  id: 2342,
  name: "admin",
  last_code: hashed,
})
.then(response => {
  console.log(response.data)
})
