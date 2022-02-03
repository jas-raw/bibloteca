import express from "express";
import { LoanController } from "../../app_bussiness_rules/controllers/loan_controller";
import { loan_filter } from "../frameworks_and_drivers/middlewares/filters/loan";

const loan = express.Router();

const loan_controller = new LoanController()

loan.get("/read", loan_filter, loan_controller.reads)
loan.post("/create", loan_controller.creates)
loan.put("/update", loan_controller.updates)
loan.delete("/delete", loan_controller.deletes)

export {
    loan
}