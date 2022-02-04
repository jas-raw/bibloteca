import { SUCCESSFUL, SERVERERROR, CREATED, NO_CONTENT } from "../../web/frameworks_and_drivers/config/config"
import{ create_loan, read_loan, delete_loan } from "../use_cases/loan"

export class LoanController{

    async creates(req: any, res: any){
        const loan = req.body
        let data = await create_loan(loan)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.status(CREATED).send(data)
    }

    async reads(req: any, res: any){
        let data = await read_loan()
        return res.status(SUCCESSFUL).send(data)
    }

    async updates(req: any, res: any){
        throw new Error("Method not implemented yet")
    }

    async deletes(req: any, res: any){
        const { id } = req.query
        let data = await delete_loan(id)
        if(data.error){
            return res.status(SUCCESSFUL).send(data)
        }
        return res.status(SUCCESSFUL).send(data)
    }

}