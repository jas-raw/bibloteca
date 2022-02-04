import { SUCCESSFUL, SERVERERROR, CREATED, NO_CONTENT } from "../../web/frameworks_and_drivers/config/config"
import{ create_user, read_user, update_user, delete_user } from "../use_cases/user"

export class UserController{

    async creates(req: any, res: any){
        const user = req.body
        let data = await create_user(user)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.status(CREATED).send(data)
    }

    async reads(req: any, res: any){
        const filter = req.filter
        let data = await read_user(filter)
        return res.status(SUCCESSFUL).send(data)
    }

    async updates(req: any, res: any){
        const {id} = req.query
        const user = req.body
        let data = await update_user(id, user)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.status(SUCCESSFUL).send(data)
    }

    async deletes(req: any, res: any){
        const { id } = req.query
        let data = await delete_user(id)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.sendStatus(NO_CONTENT)
    }

}