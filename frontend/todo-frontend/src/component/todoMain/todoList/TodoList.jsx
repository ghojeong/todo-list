import todoListService from "../../../service/todoListServie";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const database = {
        author: "pyro",
        todoList : [
            {
                author: "jenny",
                content: "고운 제니",
            },
            {
                author: "kyle",
                content: "듬직한 카일",
            }
        ]
    };
    // localStorage.setItem("database", JSON.stringify(database));
    // JSON.parse(localStorage.getItem("database"));

    const  author = "pyro";
    const todoListObj = [
        {
            author: "jenny",
            content: "고운 제니",
        },
        {
            author: "kyle",
            content: "듬직한 카일",
        }
    ];

    todoListService.setTodoList(todoListObj);
    const todoList = todoListService.getTodoList();

    return (<div>
        <div>
            {todoList.map(item => <TodoItem item={item} />)}
        </div>
    </div>);
};

export default TodoList;
