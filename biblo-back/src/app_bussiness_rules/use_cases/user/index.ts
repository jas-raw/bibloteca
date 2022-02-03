import { created } from "./create";
import { read } from "./read";
import { updated } from "./update";
import { deleted } from "./delete";

import user_model from "../../../web/models/user_model";
import { log } from "../../../web/frameworks_and_drivers/drivers/logger";

export const create_user = created(user_model, log)
export const read_user = read(user_model, log)
export const update_user = updated(user_model, log)
export const delete_user = deleted(user_model, log)
