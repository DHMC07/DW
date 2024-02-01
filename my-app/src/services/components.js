import bcrypt from "bcrypt"
import { get_admin } from "./connections";

const saltRounds = 10;

export async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Contraseña hasheada:', hash);
    return hash;
}

export async function compararSenha (senha)  {
    get_admi().then(reponse =>{
      const match = bcrypt.compare(senha, reponse.data.senha);
      return match;
    })
};