const todoDoListServe = {
    addTodoItem: (item) => {},
    updateTodoItem: (item) => {},
    setTodoList: (todoList) => {
        const db = localStorage.getItem("database"); // 서버 요청
        const database = JSON.parse(db);
        localStorage.setItem("database", JSON.stringify(
            {
                ...database,
                todoList
            }
        ));
    },
    getTodoList: () => {
        const db = localStorage.getItem("database"); // 서버 요청
        const { todoList } = JSON.parse(db);
        return todoList;
    }
};

export default todoDoListServe;
