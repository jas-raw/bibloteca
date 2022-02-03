import express from "express";
import cors from "cors";

import { PORT, TABLE_OPS } from "./web/frameworks_and_drivers/config/config";
import { connect_db } from "./web/frameworks_and_drivers/drivers/db";
import { models } from "./web/models";
import { log } from "./web/frameworks_and_drivers/drivers/logger";
import router from "./web/routes";

const app = express();
const PATH = '/api/v1/'

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(cors());

app.use(PATH, router);

app.get('/liveness', (req: any, res: any) => res.send({state: "ok"}))

app.listen(PORT, () => {
    models.forEach(async (it) => {
        await it.sync(TABLE_OPS)
    })
    connect_db()
    log(`Application starts at port: ${PORT}`)
})