function created(modelo: any, user: any, book: any, sequelize: any, log: any){
    return async function created_loan(loan: any){
        log(`Datos a guardar ${JSON.stringify(loan)}`)
        const { username, book_id} = loan
        let data
        console.log("Hola")
        const t = await sequelize.transaction();
        const transaction = { transaction: t }
        try{
            const user_in_db = await user.findOne( { where:{ username } } )
            const book_in_db = await book.findByPk( book_id )
            if(user_in_db){
                if(book_in_db){
                    if(book_in_db.available){
                        const new_loan = {
                            user_id: user_in_db.id,
                            book_id: book_id
                        }
                        const loan_in_db = await modelo.create(new_loan, transaction)
                        if(loan_in_db){
                            const book_up = {...book_in_db, available: false}
                            const book_updated = await book.update(book_up, {
                                where: {
                                    id: book_id
                                }
                            })
                            await t.commit()
                            data = {data: "Prestamo exitoso"}
                        }else{
                            data = {error: `No se pudo guardar el prestamo`}
                        }
                    }else{
                        data = {error: `El libro no se encuentra disponible`}
                    }
                }else{
                    data = {error: `El libro no existe`}
                }
            }else{
                data = {error: `El usuario no existe`}
            }
        }catch(e){
            data = {error: `No se pudo crear, error: ${e}`}
            await t.rollback();
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    created
}