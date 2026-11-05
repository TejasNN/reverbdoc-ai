import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log(
    `ReverbDoc AI backend running at http://localhost:${env.PORT}`
  );

  console.log(`Environment: ${env.NODE_ENV}`);
});

// Graceful shutdown
const shutdown = (signal: string) => {
  console.log(`${signal} received. Shutting down server...`);

  server.close((error) => {
    if (error) {
      console.error("Error during server shutdown:", error);
      process.exit(1);
    }

    console.log("Server closed successfully.");
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));