const request = require('supertest');
const app = require('../app.js');


describe("POST /signup", () => {
    test("should create user", async () => {
        const res = await request(app)
            .post("/signup")
            .send({
                username: "username",
                email: "email@email.com",
                password: "password"
            });

        expect(res.statusCode).toBe(200);
    });

    test("should reject duplicate user", async () => {
        await request(app)
            .post("/signup")
            .send({
                username: "username",
                email: "email@email.com",
                password: "password"
            });

        const res = await request(app)
            .post("/signup")
            .send({
                username: "username",
                email: "email@email.com",
                password: "password"
            });

        expect(res.statusCode).toBe(400)
    });
});

describe("POST /login", () => {
    test("should login provided valid credentials", async () => {
        await request(app)
            .post("/signup")
            .send({
                username: "username",
                email: "email@email.com",
                password: "password"
            });

        const res = await request(app)
            .post("/login")
            .send({
                email: "email@email.com",
                password: "password"
            });

        expect(res.statusCode).toBe(200)
    });

    test("should reject request provided invalid credentials", async () => {
        const res = await request(app)
            .post("/login")
            .send({
                email: "email@email.com",
                password: "invalidpassword"
            });

        expect(res.statusCode).toBe(400)
    });
});

describe("GET /logout", () => {
    test("should logout the user only if logged in", async () => {
        const res = await request(app).get("/logout")

        expect(res.statusCode).toBe(200)
    });
})