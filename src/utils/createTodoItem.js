export default function createTodoItem(label, id, important = false, done = false) {
    return {
        label,
        important: important,
        done: done,
        id: id
    };
}
