import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send({
      status: 200,
      data: {
        msg: "success",
      },
    });
  });
};

export default routes;
