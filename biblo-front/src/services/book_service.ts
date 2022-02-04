import { Book } from "../interfaces/Book"
import { ax } from "../utils/ax"

const url_back = "/books"

export const searchBooks = async (title: string) => {
    const url = url_back+`/read`+(title !== "" ? `?title=${title}` : "")
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

export const createBooks = async (book: Book) => {
    const url = url_back+"/create"
    const data = await ax.post(url, book)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}

export const updateBooks = async (id: string, book: Book) => {
    const url = url_back+`/update`+(id ? `?id=${id}` : "")
    const data = await ax.put(url, book)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}

export const deleteBooks = async (id: string) => {
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