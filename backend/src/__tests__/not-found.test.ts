import {describe, it, expect } from "@jest/globals";
import request from "supertest";
import app from "../app.js";

describe("Not Found Middleware", () => {
  it("should return HTTP 404 for an unknown route", async () => {
    const response = await request(app)
      .get("/api/v1/this-route-does-not-exist");

    expect(response.status).toBe(404);
  });
});