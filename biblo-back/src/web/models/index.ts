import book_model from "./book_model";
import loan_model from "./loan_model";
import user_model from "./user_model";

book_model.belongsToMany(user_model, {through: loan_model, foreignKey: "book_id"})
user_model.belongsToMany(book_model, {through: loan_model, foreignKey: "user_id"})

export const models = [
    user_model,
    loan_model,
    book_model
]