import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createTodoItem } from '../../utils';
import TodoListGroup from '../TodoListGroup';
import style from './TodoApp.module.css';

const TodoApp = ({ todoData, handleMouseLeave }) => {
    let ids = 100;
    const [todoDataLocal, setTodoDataLocal] = useState(todoData || []);

    const handleToggleProperty = (id, propName) => {
        setTodoDataLocal((s) => {
            const idIndex = s.findIndex(item => item.id === id);
            const oldItem = s[idIndex];
            const newItemProperty = {
                ...oldItem,
                [propName]: !oldItem[propName]
            };

            if (~idIndex) {
                return [
                    ...s.slice(0, idIndex),
                    newItemProperty,
                    ...s.slice(idIndex + 1)
                ];
            }
        });
    };

    const handleTrash = (id) => {
        setTodoDataLocal(s => {
            const idIndex = s.findIndex(item => item.id === id);
            if (~idIndex) {
                return [
                    ...s.slice(0, idIndex),
                    ...s.slice(idIndex + 1)
                ];
            } else {
                return s;
            }
        });
    };

    useEffect(() => {
        setTodoDataLocal(() => {
            if (todoData) {
                return [
                    ...todoData.map((item) => {
                        return createTodoItem(item.label, item.id, item.done, item.important);
                    })
                ];
            } else {
                return [
                    createTodoItem('Drink Coffee', ++ids),
                    createTodoItem('Create Perfect Project', ++ids),
                    createTodoItem('Some New', ++ids)
                ];
            }
        });
    }, [ids, todoData]);

    return (
        <div className={style.todoApp} onMouseLeave={() => handleMouseLeave(todoDataLocal)}>
            <TodoListGroup todoData={todoDataLocal}
                handleDone={(id) => handleToggleProperty(id, 'done')}
                handleImportant={(id) => handleToggleProperty(id, 'important')}
                handleTrash={handleTrash} />
        </div>
    );
};

TodoApp.propTypes = {
    todoData: PropTypes.array,
    handleMouseLeave: PropTypes.func
};

export default TodoApp;
