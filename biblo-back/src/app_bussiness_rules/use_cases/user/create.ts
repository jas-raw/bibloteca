function created(modelo: any, log: any){
    return async function created_loan(loan: any){
        log(`Datos a guardar ${JSON.stringify(loan)}`)
        let data
        try{
            data = await modelo.create(loan)
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