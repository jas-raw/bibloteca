import { SUCCESSFUL, SERVERERROR, CREATED, NO_CONTENT } from "../../web/frameworks_and_drivers/config/config"
import{ create_book, read_book, update_book, delete_book } from "../use_cases/book"

export class BookController{

    async creates(req: any, res: any){
        const book = req.body
        let data = await create_book(book)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.status(CREATED).send(data)
    }

    async reads(req: any, res: any){
        const filter = req.filter
        let data = await read_book(filter)
        return res.status(SUCCESSFUL).send(data)
    }

    async updates(req: any, res: any){
        const {id} = req.query
        const book = req.body
        let data = await update_book(id, book)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.status(SUCCESSFUL).send(data)
    }

    async deletes(req: any, res: any){
        const { id } = req.query
        let data = await delete_book(id)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.sendStatus(NO_CONTENT)
    }

}