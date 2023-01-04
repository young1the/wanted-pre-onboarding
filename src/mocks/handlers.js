import { rest } from "msw";

const manager = [
  {name: "백광천"},
  {name: "박준하"},
  {name: "유제원"},
  {name: "류지창"},
  {name: "조영일"},
  {name: "정세연"},
];

const issues = [
  {
    title: "테스트",
    time: new Date(),
    content: "테스트입니다.",
    managers: manager,
    status: "progress"
  }
]

export const handlers = [
  rest.post("http://test.com/issue", (req, res, ctx) => {
    issues.push({...req.body, id: req.id});
    return res(
      ctx.status(200)
    );
  }),
  rest.get("http://test.com/issue", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(issues)
      );
  }),

  rest.get("http://test.com/manager", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(manager)
      );
  }),
];
