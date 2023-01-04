import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("https://wanted-wemade-default-rtdb.asia-southeast1.firebasedatabase.app/manager.json", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // return res(
    //   ctx.status(403),
    //   ctx.json({
    //     errorMessage: "Not authorized",
    //   })
    // );
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([{
        name: "admin",
      }, {name: "james"}])
    );
  }),
];
