import React from 'react';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';
import style from './TodoListGroup.module.css';

const TodoListGroup = ({ handleDone, handleImportant, handleTrash, todoData = [] }) => {
    return (
        <div className={style.todoListGroup}>
            {
                todoData.length > 0
                    ? todoData.map(item => {
                        return <TodoItem
                            key={'todoItemId' + item.id}
                            id={item.id}
                            label={item.label}
                            done={item.done}
                            important={item.important}
                            handleDone={() => handleDone(item.id)}
                            handleImportant={() => handleImportant(item.id)}
                            handleTrash={() => handleTrash(item.id)}
                        />;
                    })
                    : ''
            }
        </div>
    );
};

TodoListGroup.propTypes = {
    todoData: PropTypes.array,
    handleDone: PropTypes.func,
    handleImportant: PropTypes.func,
    handleTrash: PropTypes.func
};

export default TodoListGroup;
