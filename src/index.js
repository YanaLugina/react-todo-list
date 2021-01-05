import React from 'react';
import TodoApp from './TodoApp';
import PropTypes from 'prop-types';

export const TodoListComponent = ({ todoData }) => {
    return (
        <TodoApp todoData={todoData} />
    );
};

TodoListComponent.propTypes = {
    todoData: PropTypes.array
};
