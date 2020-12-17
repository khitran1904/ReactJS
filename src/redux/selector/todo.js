export const selectorTodoList = state => {
    let todoList = state.todoReducer.todoList;
    if (state.todoReducer.filter === "complete") {
        todoList = state.todoReducer.todoList.filter((todo) => {
            return todo.isComplete === true;
        });
    }
    if (state.todoReducer.filter === "uncomplete") {
        todoList = state.todoReducer.todoList.filter((todo) => {
            return todo.isComplete === false;
        });
    }
    return todoList;
}