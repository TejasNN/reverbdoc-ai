import { describe, it, expect } from "@jest/globals";
import request from "supertest";

import app from "../app.js";

describe("OpenAPI documentation", () => {
  it("should return the OpenAPI JSON specification", async () => {
    const response = await request(app)
      .get("/api-docs.json")
      .expect(200);

    expect(response.body.openapi).toBe("3.1.0");
    expect(response.body.info.title).toBe("ReverbDoc AI API");
  });

  it("should document the health endpoint", async () => {
    const response = await request(app)
      .get("/api-docs.json")
      .expect(200);

    expect(
      response.body.paths["/api/v1/health"].get.tags
    ).toContain("Health");
  });

  it("should serve the Swagger UI", async () => {
    await request(app)
      .get("/api-docs/")
      .expect(200)
      .expect("Content-Type", /text\/html/);
  });
});