import { rest } from "msw";
import { manager, LinkedList } from "./db";

const todoList = new LinkedList("todo");
const progressList = new LinkedList("progress");
const completeList = new LinkedList("complete");

todoList.append({
  content: "뭘까요?",
  id: "3727cfcb5c106",
  managers: manager,
  status: "TODO",
  time: "2023-02-01T19:05",
  title: "원티드 3주차 과제",
});

todoList.append({
  content: "뭘까요?",
  id: "3727cfc292b5c106",
  managers: manager,
  status: "TODO",
  time: "2023-02-01T19:05",
  title: "이동테스트용",
});

todoList.append({
  content: "테스트입니다.",
  id: "3727cfcb5c108",
  managers: manager,
  status: "TODO",
  time: "2023-02-01T19:05",
  title: "테스트",
});

progressList.append({
  content: "이슈 트래킹 과제",
  id: "11115c106",
  managers: manager,
  status: "PROGRESS",
  time: "2023-02-01T19:05",
  title: "원티드 2주차 과제",
});

progressList.append({
  content: "테스트입니다.",
  id: "1111108",
  managers: manager,
  status: "PROGRESS",
  time: "2023-02-01T19:05",
  title: "테스트",
});

completeList.append({
  content: "crud과제",
  id: "333331111",
  managers: manager,
  status: "COMPLETE",
  time: "2023-02-01T19:05",
  title: "원티드 1주차 과제",
});

completeList.append({
  content: "테스트입니다.",
  id: "33332222",
  managers: manager,
  status: "COMPLETE",
  time: "2023-02-01T19:05",
  title: "테스트",
});

const putHandlerFn = (req, type) => {
  console.log(type);
  let _found = type.find(req.params.id);
  if (!_found) return false;
  if (_found.data.status !== req.body.status) {
    if (body.status === "todo") {
      todoList.append(req.body);
    } else if (body.status === "progress") {
      progressList.append(req.body);
    } else {
      completeList.append(req.body);
    }
    type.delete(req.params.id);
  } else {
    type.changeData(req.body, req.params.id)
  }
  return true;
};

export const handlers = [
  // todo
  rest.post("http://test.com/todo/", (req, res, ctx) => {
    const _result = todoList.append({ ...req.body, id: req.id });
    console.log(todoList.toArray());
    if (_result) return res(ctx.status(200));
    else return res(ctx.status(400));
  }),
  rest.get("http://test.com/todo/", (req, res, ctx) => {
    const _array = todoList.toArray();
    console.log(_array);
    console.log(`${_array} todoList`);
    return res(ctx.status(200), ctx.json(_array));
  }),
  rest.get("http://test.com/todo/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = todoList.find(_id).data;
    if (_result) return res(ctx.status(200), ctx.json({..._result}));
    else return res(ctx.status(400));
  }),
  rest.delete("http://test.com/todo/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = todoList.delete(_id);
    if (_result) {
      return res(ctx.status(200));
    } else return res(ctx.status(404));
  }),
  rest.put("http://test.com/todo/:id", (req, res, ctx) => {
    let _found = todoList.find(req.params.id);
    if (!_found) return res(ctx.status(404));
    if (_found.data.status !== req.body.status) {
      if (req.body.status === "PROGRESS") {
        progressList.append(req.body);
      } else if (req.body.status === "COMPLETE") {
        completeList.append(req.body);
      }
      todoList.delete(req.params.id);
    } else {
      todoList.changeData(req.body, req.params.id)
    }
    return res(ctx.status(200), ctx.json(_found.data));
  }),
  rest.put("http://test.com/todo/order/:id", (req, res, ctx) => {
    const _result = todoList.put(req.body);
    if (_result) return res(ctx.status(200), ctx.json(issues));
    return res(ctx.status(404));
  }),





  // progress
  rest.post("http://test.com/progress/", (req, res, ctx) => {
    const _result = progressList.append({ ...req.body, id: req.id });
    console.log(progressList.toArray());
    if (_result) return res(ctx.status(200));
    else return res(ctx.status(400));
  }),
  rest.get("http://test.com/progress/", (req, res, ctx) => {
    const _array = progressList.toArray();
    console.log(_array);
    console.log(`${_array} progressList`);
    return res(ctx.status(200), ctx.json(_array));
  }),
  rest.get("http://test.com/progress/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = progressList.find(_id).data;
    if (_result) return res(ctx.status(200), ctx.json({..._result}));
    else return res(ctx.status(400));
  }),
  rest.delete("http://test.com/progress/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = progressList.delete(_id);
    if (_result) {
      return res(ctx.status(200));
    } else return res(ctx.status(404));
  }),
  rest.put("http://test.com/progress/:id", (req, res, ctx) => {
    let _found = progressList.find(req.params.id);
    if (!_found) return res(ctx.status(404));
    if (_found.data.status !== req.body.status) {
      if (req.body.status === "TODO") {
        todoList.append(req.body);
      } else if (req.body.status === "COMPLETE") {
        completeList.append(req.body);
      }
      progressList.delete(req.params.id);
    } else {
      progressList.changeData(req.body, req.params.id)
    }
    return res(ctx.status(200), ctx.json(_found.data));
  }),
  rest.put("http://test.com/progress/order/:id", (req, res, ctx) => {
    const _result = progressList.put(req.body);
    if (_result) return res(ctx.status(200), ctx.json(issues));
    return res(ctx.status(404));
  }),



    // complete
    rest.post("http://test.com/complete/", (req, res, ctx) => {
      const _result = completeList.append({ ...req.body, id: req.id });
      console.log(completeList.toArray());
      if (_result) return res(ctx.status(200));
      else return res(ctx.status(400));
    }),
    rest.get("http://test.com/complete/", (req, res, ctx) => {
      const _array = completeList.toArray();
      console.log(_array);
      console.log(`${_array} completeList`);
      return res(ctx.status(200), ctx.json(_array));
    }),
    rest.get("http://test.com/complete/:id", (req, res, ctx) => {
      const _id = req.params.id;
      const _result = completeList.find(_id).data;
      if (_result) return res(ctx.status(200), ctx.json({..._result}));
      else return res(ctx.status(400));
    }),
    rest.delete("http://test.com/complete/:id", (req, res, ctx) => {
      const _id = req.params.id;
      const _result = completeList.delete(_id);
      if (_result) {
        return res(ctx.status(200));
      } else return res(ctx.status(404));
    }),
    rest.put("http://test.com/complete/:id", (req, res, ctx) => {
      let _found = completeList.find(req.params.id);
      if (!_found) return res(ctx.status(404));
      if (_found.data.status !== req.body.status) {
        if (req.body.status === "TODO") {
          todoList.append(req.body);
        } else if (req.body.status === "PROGRESS") {
          progressList.append(req.body);
        }
        completeList.delete(req.params.id);
      } else {
        completeList.changeData(req.body, req.params.id)
      }
      return res(ctx.status(200), ctx.json(_found.data));
    }),
    rest.put("http://test.com/complete/order/:id", (req, res, ctx) => {
      const _result = completeList.put(req.body);
      if (_result) return res(ctx.status(200), ctx.json(issues));
      return res(ctx.status(404));
    }),
  


  // manager API
  rest.get("http://test.com/manager", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(manager));
  }),
];
