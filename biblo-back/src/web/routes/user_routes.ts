import express from "express";
import { UserController } from "../../app_bussiness_rules/controllers/user_controller";
import { user_filter } from "../frameworks_and_drivers/middlewares/filters/user";

const user = express.Router();

const user_controller = new UserController()

user.get("/read", user_filter, user_controller.reads)
user.post("/create", user_controller.creates)
user.put("/update", user_controller.updates)
user.delete("/delete", user_controller.deletes)

export {
    user
}