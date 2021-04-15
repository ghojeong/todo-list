import { useState } from 'react';
import todoListService from '../service/todoListService';

const useTodoHook = (setTodos, setTodoColumns) => {
  const [loading, setLoading] = useState(false);

  const resetTodoColumns = async () => {
    const newTodoColumns = await todoListService.getTodoList();
    setTodoColumns(newTodoColumns);
  }

  const postTodos = async (columnId, cardId, todoCard) => {
    setLoading(true);
    await todoListService.postTodoList(columnId, todoCard);
    setTodos((todos) => ({ [cardId]: todoCard, ...todos }));
    await resetTodoColumns();
    setLoading(false);
  };
  const deleteTodos = async (columnId, cardId) => {
    setLoading(true);
    await todoListService.deleteTodoList(columnId, cardId);
    await resetTodoColumns();
    setTodos((todos) => {
      delete todos[cardId];
      return { ...todos };
    });
    setLoading(false);
  };
  const putTodos = async (columnId, cardId, todoCard) => {
    setLoading(true);
    await todoListService.updateTodoList(columnId, todoCard);
    await resetTodoColumns();
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
