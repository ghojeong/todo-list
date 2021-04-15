import { useState, useRef } from 'react';

const useDragHook = (setTodoColumns) => {
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragItemNode = useRef();

  const addItem = (obj, columnId, cardId, data) => {
    const newCardList = {};
    const cardList = { ...obj[columnId].todoCards };
    if (!Object.keys(cardList).length) return { [data.id]: data };
    console.log('data', data);
    if (!cardId) return { [data.id]: data, ...obj[columnId].todoCards };
    for (const key in cardList) {
      if (+key === cardId) newCardList[data.id] = data;
      newCardList[key] = cardList[key];
    }
    return newCardList;
  };

  const handleDragStart = (e, item) => {
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener('dragend', handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, { columnId, cardId }) => {
    if (e.target !== dragItemNode.current) {
      const { columnId: dragColumnId, cardId: dragCardId } = dragItem.current;
      setTodoColumns((todoColumns) => {
        let newTodoColumns = JSON.parse(JSON.stringify(todoColumns));
        const selectedCard = newTodoColumns[dragColumnId].todoCards[dragCardId];
        delete newTodoColumns[dragColumnId].todoCards[dragCardId];
        newTodoColumns[columnId].todoCards = addItem(todoColumns, columnId, cardId, selectedCard);
        if (cardId) dragItem.current = { columnId, cardId: cardId ? cardId : dragCardId };
        // putColumns(newTodoColumns);
        return newTodoColumns;
      });
    }
  };

  const getStyleDragging = ({ columnId, cardId }) => {
    if (columnId === dragItem.columnId && cardId === dragItem.cardId) return 'dragging';
    return '';
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd);
    dragItemNode.current = null;
    // window.location.replace('/');
  };

  return [dragging, handleDragStart, handleDragEnter, getStyleDragging];
};

export default useDragHook;

const putColumns = (newTodoData) => {
  const todoColumns = JSON.parse(localStorage.getItem('todos'));
  todoColumns.todoData = { ...newTodoData };
  localStorage.setItem('todos', JSON.stringify({ ...todoColumns }));
};
