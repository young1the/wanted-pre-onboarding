import { LinkedList } from "./utils";

const manager = [
    { name: "백광천" },
    { name: "박준하" },
    { name: "유제원" },
    { name: "류지창" },
    { name: "조영일" },
    { name: "정세연" },
  ];
  
const todoList = new LinkedList("todo");
const progressList = new LinkedList("progress");
const completeList = new LinkedList("complete");

const Lists = {
  TODO: todoList,
  PROGRESS: progressList,
  COMPLETE: completeList,
};

todoList.append({
  content: "뭘까요?",
  id: "todo1",
  managers: manager,
  status: "TODO",
  time: "2023-02-01T19:05",
  title: "원티드 3주차 과제",
});

todoList.append({
  content: "뭘까요?",
  id: "todo2",
  managers: manager,
  status: "TODO",
  time: "2023-02-01T19:05",
  title: "이동테스트용",
});

todoList.append({
  content: "테스트입니다.",
  id: "todo3",
  managers: manager,
  status: "TODO",
  time: "2023-02-01T19:05",
  title: "테스트",
});

progressList.append({
  content: "이슈 트래킹 과제",
  id: "progress1",
  managers: manager,
  status: "PROGRESS",
  time: "2023-02-01T19:05",
  title: "원티드 2주차 과제",
});

progressList.append({
  content: "테스트입니다.",
  id: "progress2",
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

export { manager, todoList, progressList, completeList, Lists }