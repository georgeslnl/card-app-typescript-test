import { server } from "../src/server"
import Prisma from "../src/db";

describe("Backend tests", () => {
  let testId: string;
  it("should assert 1 + 1 is 2", () => {
    expect(1 + 1).toEqual(2);
  });

  it("should get all entries", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/get/",
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(Array.isArray(body)).toBe(true);
  });

  it("should create a new entry", async () => {
    const response = await server.inject({
      method: "POST",
      url: "/create/",
      payload: {
        title: "Test",
        description: "Test",
        created_at: new Date(),
        scheduled_at: new Date(),
      },
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.title).toBe("Test");
    expect(body.description).toBe("Test");
    expect(body.created_at).toBeDefined();
    expect(body.scheduled_at).toBeDefined();
    testId = body.id;
  });

  it("should get a single entry", async () => {
    const response = await server.inject({
      method: "GET",
      url: `/get/${testId}`,
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.id).toBe(testId);
    expect(body.title).toBe("Test");
    expect(body.description).toBe("Test");
    expect(body.created_at).toBeDefined();
    expect(body.scheduled_at).toBeDefined();
  })

  it("should update an entry", async () => {
    const response = await server.inject({
      method: "PUT",
      url: `/update/${testId}`,
      payload: {
        title: "Test Updated",
        description: "Test Updated",
        created_at: new Date(),
        scheduled_at: new Date(),
      },
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.msg).toBe("Updated successfully");
  })

  it("should delete an entry", async () => {
    const response = await server.inject({
      method: "DELETE",
      url: `/delete/${testId}`,
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.msg).toBe("Deleted successfully");

    const checkResponse = await server.inject({
      method: "GET",
      url: `/get/${testId}`,
    });
    expect(checkResponse.statusCode).toBe(500);
  })
});