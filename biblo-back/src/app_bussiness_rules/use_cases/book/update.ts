function updated(modelo: any, log: any){
    return async function updated_book(id: string, book: any){
        log(`ID a editar ${JSON.stringify(id)}, datos nuevos ${book}`)
        let data
        try{
            const ok = await modelo.update(book, {
                where: {
                    id
                }
            })
            if(ok[0] === 1){
                data = book
            }else{
                throw new Error("El libro no existe")
            }
        }catch(e){
            data = {error: `No se pudo editar el libro con ID ${id}, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    updated
}