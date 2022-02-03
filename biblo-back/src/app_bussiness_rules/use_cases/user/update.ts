function updated(modelo: any, log: any){
    return async function updated_user(id: string, user: any){
        log(`ID a editar ${JSON.stringify(id)}, datos nuevos ${user}`)
        let data
        try{
            const ok = await modelo.update(user, {
                where: {
                    id
                }
            })
            data = ok[0] === 1 && user
        }catch(e){
            data = {error: `No se pudo editar el usuario con ID ${id}, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    updated
}