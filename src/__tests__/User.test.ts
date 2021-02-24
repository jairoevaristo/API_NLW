import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connect = await createConnection();
    await connect.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response =  await request(app).post("/users").send({ 
      name: "Jairo Gomes",
      email: "jairogomes@gmail.com"
  });

    expect(response.status).toBe(201);
  });
 
  it("Should be able to create a new user with exists email", async () => {
    const response =  await request(app).post("/users").send({ 
      name: "Jairo Gomes",
      email: "jairogomes@gmail.com"
  });

    expect(response.status).toBe(400);
  });
});