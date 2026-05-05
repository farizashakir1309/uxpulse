import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let events: any[] = [];
app.get("/", (_req, res) => {
    res.send("API is running 🚀");
  });

  app.post("/events", (req, res) => {
    console.log("EVENT RECEIVED:", req.body);
  
    events.push(req.body);
  
    res.json({
      success: true,
      received: req.body
    });
  });

app.get("/events", (_req: Request, res: Response) => {
  res.json(events);
});
console.log("starting server...");
app.listen(3001, "0.0.0.0", () => {
    console.log("API running on 3001");
  });