const TodoItem = ({ item }) => {
    const {author, content} = item;
    return (
        <div style={{margin: 16}}>
            <div>Author: {author}</div>
            <div>Content: {content}</div>
        </div>
    );
};

export default TodoItem;
