import React, { useState, useEffect, useRef } from 'react';
import TodoList from './todoList/TodoList';
import styled from 'styled-components';
import todoListService from '../../service/todoListService.js';
import useDragHook from '../../hook/dragHook.js';

const StyledTodoMain = styled.div`
  display: flex;
  padding: 0 80px;
`;

const TodoMain = ({ postLogs }) => {
  const [todoColumns, setTodoColumns] = useState({});
  const [dragging, handleDragStart, handleDragEnter, getStyleDragging] = useDragHook(
    setTodoColumns
  );

  useEffect(() => {
    getInitTodoData();
  }, []);

  useEffect(() => {
    setTodoColumns(todoColumns);
  }, [setTodoColumns]);

  const getInitTodoData = async () => {
    const todoListData = await todoListService.getTodoList();
    setTodoColumns(todoListData.todoData);
  };

  const deleteTodoColumn = (id) => {
    setTodoColumns((todoColumns) => {
      delete todoColumns[id];
      return { ...todoColumns };
    });
  };

  const todoColumneList = Object.values(todoColumns).map((data) => (
    <TodoList
      key={data.id}
      data={data}
      dragging={dragging}
      getStyleDragging={getStyleDragging}
      deleteTodoColumn={deleteTodoColumn}
      postLogs={postLogs}
      handleDragStart={handleDragStart}
      handleDragEnter={handleDragEnter}
    />
  ));

  return <StyledTodoMain>{todoColumneList}</StyledTodoMain>;
};
export default TodoMain;
