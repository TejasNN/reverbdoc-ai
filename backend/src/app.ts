import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import { env } from "./config/env.js";
import { openApiSpec } from "./config/openapi.js";
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

// OpenAPI specification in JSON format
app.get("/api-docs.json", (_req, res) => {
  res.status(200).json(openApiSpec);
});

// Swagger UI
app.use(
  "/api-docs",
  (_req: Request, res: Response, next: NextFunction) => {
    // Swagger UI uses inline scripts and styles.
    // Remove Helmet's CSP header for documentation routes only.
    res.removeHeader("Content-Security-Policy");
    next();
  },
  swaggerUi.serve,
  swaggerUi.setup(openApiSpec)
);

// API routes
app.use("/api/v1", apiRouter);

// Handle unknown routes
app.use(notFoundHandler);

// Centralized error handling
app.use(errorHandler);

export default app;