import bcrypt from "bcrypt"

const saltRounds = 10;

export async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Contraseña hasheada:', hash);
    return hash;
}

export async function compararSenha (senha)  {



    try {
      const match = await bcrypt.compare(senha, hash);
      return match;
    } catch (error) {
      throw error;
    }
};