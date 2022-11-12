import { PgConnection, ClientBase } from "src/common/db/Pg";
import { Request, Response } from "express";


export class UserController {

    private db: ClientBase;
    
    constructor(){
        this.db = PgConnection.getInstance().client;
    }

    async getMoment(req: Request, res: Response) {
        const result = await this.db.query("SELECT NOW()");
        res.send(result.rows);
    }
    
}