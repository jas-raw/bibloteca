function deleted(modelo: any, book: any, sequelize: any, log: any){
    return async function deleted_book(loan_id: any){
        log(`ID a desactivar ${JSON.stringify(loan_id)}`)
        let data
        const t = await sequelize.transaction();
        const transaction = { transaction: t }
        try{
            const loan_in_db = await modelo.findByPk(loan_id)
            if(loan_in_db){
                const book_in_db = book.findByPk(loan_in_db.book_id)
                if(book_in_db){
                    const book_update = {...book_in_db, available: true}
                    const ok_book = await book.update(book_update, {
                        where: {
                            id: loan_in_db.book_id
                        }
                    }, transaction)
                    if(ok_book[0] === 1){
                        const loan_update = {...loan_in_db, active: false}
                        const ok_loan = await modelo.update(loan_update, {
                            where: {
                                id: loan_id
                            }
                        })
                        console.log(loan_in_db, ok_loan)
                        if(ok_loan[0] === 1){
                            data = loan_in_db
                            await t.commit()
                        }else{
                            throw new Error("Error al anular el prestamo")
                        }
                    }else{
                        throw new Error("No se pudo actualizar el estado del libro")
                    }
                }else{
                    throw new Error("El libro no existe")
                }
            }else{
                throw new Error(`El prestamo con ID: ${loan_id} no existe`)
            }
        }catch(e){
            data = {error: `No se pudo anular, error: ${e}`}
            await t.rollback()
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

export {
    deleted
}