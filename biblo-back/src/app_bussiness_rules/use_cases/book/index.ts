import { created } from "./create";
import { read } from "./read";
import { updated } from "./update";
import { deleted } from "./delete";

import book_model from "../../../web/models/book_model";
import { log } from "../../../web/frameworks_and_drivers/drivers/logger";

export const create_book = created(book_model, log)
export const read_book = read(book_model, log)
export const update_book = updated(book_model, log)
export const delete_book = deleted(book_model, log)
