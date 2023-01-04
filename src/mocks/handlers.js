import { rest } from "msw";

let manager = [
  { name: "백광천" },
  { name: "박준하" },
  { name: "유제원" },
  { name: "류지창" },
  { name: "조영일" },
  { name: "정세연" },
];

let issues = [
  {
    title: "테스트",
    time: "2022-12-24",
    content: "테스트입니다.",
    managers: manager,
    status: "proress",
    id: "testid",
  },
  {
    title: "테스트",
    time: "2022-12-24",
    content: "테스트입니다.",
    managers: manager,
    status: "proress",
    id: "testid2",
  },
];

export const handlers = [
  rest.post("http://test.com/issue", (req, res, ctx) => {
    issues.push({ ...req.body, id: req.id });
    return res(ctx.status(200));
  }),
  rest.get("http://test.com/issue/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(issues));
  }),
  rest.get("http://test.com/issue/:id", (req, res, ctx) => {
    const _id = req.params.id;
    for (let issue of issues) {
      if (issue.id === _id) {
        return res(ctx.status(200), ctx.json(issue));
      }
    }
    return res(ctx.status(404));
  }),
  rest.delete("http://test.com/issue/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _prevLen = issues.length;
    issues = issues.filter((ele) => {
      return ele.id !== _id;
    });
    if (_prevLen !== issues.length) {
      return res(ctx.status(200));
    }
    return res(ctx.status(404));
  }),
  rest.put("http://test.com/issue/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _prevLen = issues.length;
    issues = issues.filter((ele) => {
      return ele.id !== _id;
    });
    if (_prevLen !== issues.length) {
      issues.push(req.body);
      return res(ctx.status(200), ctx.json(issues));
    }
    return res(ctx.status(404));
  }),

  rest.get("http://test.com/manager", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(manager));
  }),
];
