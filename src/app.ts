import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello, omg it's working");
});

app.listen(5200, () => console.log("Server running here"));
