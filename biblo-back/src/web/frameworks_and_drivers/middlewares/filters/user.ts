import { Op } from "sequelize"

const user_filter = (req: any, res: any, next: any) => {
    const query = req.query
    let filter: any = {}
    for(let property in query){
        switch(property){
            case 'username':
                filter[property] = {
                    [Op.eq]: query[property]
                }
                break
            default:
                break
        } 
    }
    req.filter = filter
    next()
}

export {
    user_filter
}