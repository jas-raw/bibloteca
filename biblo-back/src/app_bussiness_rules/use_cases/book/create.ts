function created(modelo: any, log: any){
    return async function created_book(book: any){
        log(`Datos a guardar ${JSON.stringify(book)}`)
        let data
        try{
            data = await modelo.create(book)
        }catch(e){
            data = {error: `No se pudo crear, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    created
}