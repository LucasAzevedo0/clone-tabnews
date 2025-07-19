import database from "infra/database";
import orchestator from "tests/orchestator.js";

beforeAll(async () => {
  await orchestator.waitForAllServices();
  await database.query("DROP schema public cascade; create schema public");
});

describe("GET /api/v1/migrations", () => {
  describe("Anonymous User", () => {
    test("Retrieving pending migrations", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations");
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0);
    });
  });
});
