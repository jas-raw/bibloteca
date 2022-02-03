function deleted(modelo: any, log: any){
    return async function deleted_user(id: string){
        log(`ID a eliminar ${JSON.stringify(id)}`)
        let data
        try{
            data = await modelo.destroy({
                where: {
                    id
                }
            })
        }catch(e){
            data = {error: `No se pudo eliminar el libro con ID ${id}, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    deleted
}