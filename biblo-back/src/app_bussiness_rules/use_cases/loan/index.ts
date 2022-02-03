import { created } from "./create";
import { read } from "./read";
import { deleted } from "./delete";

import loan_model from "../../../web/models/loan_model";
import book_model from "../../../web/models/book_model";
import user_model from "../../../web/models/user_model";
import { log } from "../../../web/frameworks_and_drivers/drivers/logger";
import { sequelize } from "../../../web/frameworks_and_drivers/drivers/db";

export const create_loan = created(loan_model, user_model, book_model, sequelize, log)
export const read_loan = read(user_model, book_model, log)
export const delete_loan = deleted(loan_model, book_model, sequelize, log)
