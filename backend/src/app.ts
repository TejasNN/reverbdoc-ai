import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import apiRouter from "./routes/index.js";
import { notFoundHandler } from "./middleware/not-found.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// Security headers
app.use(helmet());

// Cross-origin resource sharing
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  })
);

// Request body parsing
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1", apiRouter);

// Handle unknown routes
app.use(notFoundHandler);

// Centralized error handling
app.use(errorHandler);

export default app;