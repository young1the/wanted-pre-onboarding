import { rest } from "msw";
import { manager, Lists, todoList, progressList, completeList } from "./db"

export const handlers = [
  // todo
  rest.post("http://test.com/todo/", (req, res, ctx) => {
    const _result = todoList.append({ ...req.body, id: req.id });
    if (_result) return res(ctx.status(200));
    else return res(ctx.status(400));
  }),
  rest.get("http://test.com/todo/", (req, res, ctx) => {
    const _array = todoList.toArray();
    return res(ctx.status(200), ctx.json(_array));
  }),
  rest.get("http://test.com/todo/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = todoList.find(_id).data;
    if (_result) return res(ctx.status(200), ctx.json({ ..._result }));
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
      todoList.changeData(req.body, req.params.id);
    }
    return res(ctx.status(200), ctx.json(_found.data));
  }),

  // progress
  rest.post("http://test.com/progress/", (req, res, ctx) => {
    const _result = progressList.append({ ...req.body, id: req.id });
    if (_result) return res(ctx.status(200));
    else return res(ctx.status(400));
  }),
  rest.get("http://test.com/progress/", (req, res, ctx) => {
    const _array = progressList.toArray();
    return res(ctx.status(200), ctx.json(_array));
  }),
  rest.get("http://test.com/progress/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = progressList.find(_id).data;
    if (_result) return res(ctx.status(200), ctx.json({ ..._result }));
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
      progressList.changeData(req.body, req.params.id);
    }
    return res(ctx.status(200), ctx.json(_found.data));
  }),

  // complete
  rest.post("http://test.com/complete/", (req, res, ctx) => {
    const _result = completeList.append({ ...req.body, id: req.id });
    if (_result) return res(ctx.status(200));
    else return res(ctx.status(400));
  }),
  rest.get("http://test.com/complete/", (req, res, ctx) => {
    const _array = completeList.toArray();
    return res(ctx.status(200), ctx.json(_array));
  }),
  rest.get("http://test.com/complete/:id", (req, res, ctx) => {
    const _id = req.params.id;
    const _result = completeList.find(_id).data;
    if (_result) return res(ctx.status(200), ctx.json({ ..._result }));
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
      completeList.changeData(req.body, req.params.id);
    }
    return res(ctx.status(200), ctx.json(_found.data));
  }),

  // order handling
  rest.put("http://test.com/issue/:id", (req, res, ctx) => {
    const { prev, next } = req.body;
    const _node = Lists[prev.status].find(prev.id);
    const _data = { ..._node.data };
    _data.status = next.status;
    Lists[prev.status].delete(prev.id);
    if (next.id === "top") {
      Lists[next.status].unshift(_data);
    } else if (next.id === "bottom") {
      Lists[next.status].append(_data);
    } else {
      Lists[next.status].put(_data, next.id);
    }
    return res(ctx.status(200));
  }),

  // manager API
  rest.get("http://test.com/manager", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(manager));
  }),
];
