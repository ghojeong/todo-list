import { useState } from 'react';
import todoListService from '../service/todoListService';

const useTodoHook = (setTodos, setTodoColumns) => {
  const [loading, setLoading] = useState(false);

  const postTodos = async (columnId, cardId, todoCard) => {
    setLoading(true);
    await todoListService.postTodoList(columnId, { [cardId]: todoCard });
    setTodos((todos) => ({ [cardId]: todoCard, ...todos }));
    setTodoColumns(JSON.parse(localStorage.getItem('todos')).todoData);
    setLoading(false);
  };
  const deleteTodos = async (columnId, cardId) => {
    setLoading(true);
    await todoListService.deleteTodoList(columnId, cardId);
    setTodoColumns(JSON.parse(localStorage.getItem('todos')).todoData);
    setTodos((todos) => {
      delete todos[cardId];
      return { ...todos };
    });
    setLoading(false);
  };
  const putTodos = async (columnId, cardId, todoCard) => {
    setLoading(true);
    await todoListService.updateTodoList(columnId, { [cardId]: todoCard });
    setTodoColumns(JSON.parse(localStorage.getItem('todos')).todoData);
    setTodos((todos) => ({ ...todos, [cardId]: todoCard }));
    setLoading(false);
  };

  const moveTodos = async (beforeColumnId, afterColumnId, cData, targetCardId) => {
    await todoListService.moveTodoList(beforeColumnId, afterColumnId, cData, targetCardId);
    // deleteTodos(beforeColumnId);
    setTodos((todos) => ({ ...todos, [cData.id]: cData }));
    setLoading(true);
    setLoading(false);
  };

  return [loading, postTodos, deleteTodos, putTodos, moveTodos];
};

export default useTodoHook;
// moveTodoList(beforeColumnId, afterColumId, cardData, targetCardId)
