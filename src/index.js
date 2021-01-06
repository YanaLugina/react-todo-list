import React from 'react';
import TodoApp from './components/TodoApp';
import PropTypes from 'prop-types';

const TodoListComponent = ({ todoData, handleMouseLeave }) => {
    const initialHandleMouseLeave = () => {};
    return (
        <TodoApp todoData={todoData} handleMouseLeave={handleMouseLeave || initialHandleMouseLeave} />
    );
};

TodoListComponent.propTypes = {
    todoData: PropTypes.array,
    handleMouseLeave: PropTypes.func
};

export default TodoListComponent;
