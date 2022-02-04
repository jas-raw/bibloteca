import { Loan } from "../interfaces/Loan"
import { ax } from "../utils/ax"

const url_back = "/loans"

export const searchLoans = async () => {
    const url = url_back+`/read`
    const data = await ax.get(url)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}

export const createLoans = async (loan: Loan) => {
    const url = url_back+"/create"
    const data = await ax.post(url, loan)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}

export const deleteLoans = async (id: string) => {
    const url = url_back+`/delete`+(id ? `?id=${id}` : "")
    const data = await ax.delete(url)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}