import express, { Express } from "express";
import eventRoutes from "./api/v1/routes/eventRoutes"
// Initialize Express application
let app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("It's Online!!");
});

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.use(express.json());
app.use("/api/v1", eventRoutes);

export default app;