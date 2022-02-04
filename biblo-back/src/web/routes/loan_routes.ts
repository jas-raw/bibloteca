import express from "express";
import { LoanController } from "../../app_bussiness_rules/controllers/loan_controller";

const loan = express.Router();

const loan_controller = new LoanController()

loan.get("/read", loan_controller.reads)
loan.post("/create", loan_controller.creates)
loan.put("/update", loan_controller.updates)
loan.delete("/delete", loan_controller.deletes)

export {
    loan
}