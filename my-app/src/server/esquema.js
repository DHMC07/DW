export const Schema_evento = (nome, descricao, endereco, location, data) => {
    return {
        nome: nome,
        descricao: descricao,
        endereco: endereco,
        location: location,
        data: data,
    }
}

export const Schema_user = (id, name, code) => {
    return {
        id: id,
        name: name,
        last_code: code,
    }
}

export const Schema_token = (code) => {
    return {
        client_id: "51a74380631b8073acc7",
        client_secret: "d03e0f30a51dcf9a2916a5e429c3b37bb60dda3b",
        code: code
    }
}

    