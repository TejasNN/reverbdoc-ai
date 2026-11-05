import {describe, it, expect } from "@jest/globals";
import request from "supertest";
import app from "../app.js";

describe("GET /api/v1/health", () => {
  it("should return HTTP 200", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(response.status).toBe(200);
  });

  it("should return a successful response", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(response.body.success).toBe(true);
  });

  it("should return a non-empty message", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(typeof response.body.message).toBe("string");
    expect(response.body.message.length).toBeGreaterThan(0);
  });

  it("should return a valid timestamp", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(typeof response.body.timestamp).toBe("string");
    expect(Number.isNaN(Date.parse(response.body.timestamp))).toBe(false);
  });
});