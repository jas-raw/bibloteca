function read(user: any, book: any, log: any){
    return async function read_book(is_book: boolean, filter: any){
        //log(`Datos a buscar ${JSON.stringify(loan)}`)
        let data
        try{
            if(is_book){
                data = await book.findAll({
                    where: filter,
                    include: user
                })
            }else{
                data = await user.findAll({
                    where: filter,
                    include: book
                })
            }
        }catch(e){
            data = {error: `No se pudo procesar la solicitud, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    read
}