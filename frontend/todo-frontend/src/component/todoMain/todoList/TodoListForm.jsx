import React, { useRef } from 'react';

const TodoListForm = ({ addTodoItem, toggleForm }) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: inputTitleRef.current.value,
      content: inputContentRef.current.value,
    };
    addTodoItem(newTodo);
    console.log(inputTitleRef);
    inputTitleRef.current.value = '';
    inputContentRef.current.value = '';
    //id??? id를어찌할까 ? id=`column{위에서받아온거}card2`
  };
  const foldForm = (e) => {
    e.preventDefault();
    toggleForm();
  };

  const inputTitleRef = useRef(); //inputTitleRef.current.value
  const inputContentRef = useRef(); //inputContentRef.current.value

  return (
    <form onSubmit={onSubmitForm}>
      <input type='text' placeholder='제목을 입력하세요' ref={inputTitleRef} />
      <input type='text' placeholder='내용을 입력하세요' ref={inputContentRef} />
      <button type='submit'>등록</button>
      <button onClick={foldForm}>취소</button>
    </form>
  );
};

export default TodoListForm;
