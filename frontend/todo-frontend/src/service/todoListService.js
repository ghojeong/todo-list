import axios from "./axios";

const todoListService = {
  async postTodoList(columnId, newTodo) {
    const response = await axios.post(`/todos/${columnId}`, newTodo);
    return response.data;
  },
  async updateTodoList(columnId, newTodo) {
    const response = await axios.put(`/todos/${columnId}`, newTodo);
    return response.data;
  },
  async deleteTodoList(columnId, cardId) {
    const response = await axios.delete(`/todos/${columnId}/${cardId}`);
    return response.data;
  },
  async moveTodoList(beforeColumnId, afterColumId, cardData, targetCardId) {
    const response = await axios.delete("/todos/move", {
      beforeColumnId, afterColumId, cardData, targetCardId
    });
    return response.data;
  },
  async getTodoList() {
    const response = await axios.get("/todos");
    return response.data;
  },
  getColumnCards(columnId, todos) {
    return todos.todoData[columnId].todoCards;
  },
};

const addItem = (cardList, cardId, data) => {
  const newCardList = {};
  for (const key in cardList) {
    if (key === cardId) newCardList[data.id] = data;
    newCardList[key] = cardList[key];
  }
  return newCardList;
};

export default todoListService;
const datas = {
  author: "kyle",
  todoData: {
    0: {
      id: 0,
      title: "해야할 일",
      todoCards: {},
    },
    1: {
      id: 1,
      title: "하고있는 일",
      todoCards: {},
    },
    2: {
      id: 2,
      title: "끝난 일",
      todoCards: {},
    },
  },
};
