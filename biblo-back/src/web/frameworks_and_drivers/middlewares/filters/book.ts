import { Op } from "sequelize"

const book_filter = (req: any, res: any, next: any) => {
    const query = req.query
    let filter: any = {}
    for(let property in query){
        switch(property){
            case 'title':
                filter[property] = {
                    [Op.iLike]: "%"+query[property]
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
    book_filter
}