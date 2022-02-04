function read(modelo: any, user: any, book: any, log: any){
    return async function read_book(){
        //log(`Datos a buscar ${JSON.stringify(loan)}`)
        let data, results
        try{
            results = await modelo.findAll({
                order: [ ['createdAt', 'DESC'] ]
            })
            const books = await book.findAll()
            const users = await user.findAll()

            data = results.map((el: any) => {
                const b = books.filter((bk: any) => bk.id === el.book_id)
                const u = users.filter((us: any) => us.id === el.user_id)
                const obj = {
                    book: b[0].title,
                    user: u[0].username,
                    id: el.id,
                    active: el.active,
                    create_at: el.createdAt
                }
                return obj
            });

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