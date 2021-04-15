import React, { useEffect, useState } from "react";
import styled from "styled-components";
import todoListService from "../../service/todoListService.js";
import TodoList from "./todoList/TodoList";

const StyledTodoMain = styled.div`
  display: flex;
  padding: 0 80px;
`;

const TodoMain = ({ postLogs }) => {
  const [todoColumns, setTodoColumns] = useState({});

  const getInitTodoData = async () => {
    const todoListData = await todoListService.getTodoList();
    setTodoColumns(todoListData);
  };

  useEffect(() => {
    getInitTodoData();
  }, []);

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
      deleteTodoColumn={deleteTodoColumn}
      postLogs={postLogs}
      todoColumns={todoColumns}
      setTodoColumns={setTodoColumns}
    />
  ));

  return <StyledTodoMain>{todoColumneList}</StyledTodoMain>;
};
export default TodoMain;
