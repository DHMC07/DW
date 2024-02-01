export const Schema_evento = (nome, descricao, endereco, location, data) => {
    return {
        nome: nome,
        descricao: descricao,
        endereco: endereco,
        location: location,
        data: data,
    }
}

export const Schema_user = (id, name) => {
    return {
        id: id,
        name: name,
    }
}

    