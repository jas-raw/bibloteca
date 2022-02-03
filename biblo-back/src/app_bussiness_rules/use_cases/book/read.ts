function read(modelo: any, log: any){
    return async function read_book(filter: any){
        log(`Parametro de busqueda: ${JSON.stringify(filter)}`)
        let data
        try{
            data = await modelo.findAll({where: filter})
        }catch(e){
            data = {error: `No se pudo crear, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    read
}