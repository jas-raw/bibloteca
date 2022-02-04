import { User } from "../interfaces/User"
import { ax } from "../utils/ax"

const url_back = "/users"

export const searchUsers = async (username: string) => {
    const url = url_back+`/read`+(username ? `?username=${username}` : "")
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

export const createUsers = async (user: User) => {
    const url = url_back+"/create"
    const data = await ax.post(url, user)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}

export const updateUsers = async (id: string, user: User) => {
    const url = url_back+`/update`+(id ? `?id=${id}` : "")
    const data = await ax.put(url, user)
    .then(data => {
        return data.data
    })
    .catch(e => {
        console.error(e)
        return undefined
    })
    return data
}

export const deleteUsers = async (id: string) => {
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