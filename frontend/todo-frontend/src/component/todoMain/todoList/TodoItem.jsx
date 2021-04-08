import React, { useState } from 'react';
import TextInput from './Input.jsx';

const TodoItem = ({ todoCard: { id, title, content }, deleteTodoItem, editTodoItem }) => {
  const [cardSelected, setCardSelected] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [contentInput, setContentInput] = useState(content);

  const toggleCardBtn = () => {
    setTitleInput(title); //취소했을 시 초기값으로 들어와야 되기 때문에
    setContentInput(content);
    setCardSelected((cardSelected) => !cardSelected);
  };

  const editItem = () => {
    if (!titleInput || !contentInput) return; //버튼 disable로 바꾸게 상태값 주자.
    const newTodo = {
      id,
      title: titleInput,
      content: contentInput,
    };
    editTodoItem(id, newTodo);
    toggleCardBtn();
  };

  if (cardSelected) {
    return (
      <div onDoubleClick={toggleCardBtn}>
        <TextInput inputValue={titleInput} setInput={setTitleInput} />
        <TextInput inputValue={contentInput} setInput={setContentInput} />
        <button onClick={() => deleteTodoItem(id)}>❌</button>
        <div>
          <button onClick={toggleCardBtn}>취소</button>
          <button onClick={editItem}>수정</button>
        </div>
      </div>
    );
  } else {
    return (
      <div onDoubleClick={toggleCardBtn}>
        <h4>{title}</h4>
        <div>{content}</div>
        <button onClick={() => deleteTodoItem(id)}>❌</button>
      </div>
    );
  }
};
export default TodoItem;
