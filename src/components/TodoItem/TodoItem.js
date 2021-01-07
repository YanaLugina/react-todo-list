import React from 'react';
import { Trash2, Zap } from 'react-feather';
import style from './TodoItem.module.css';
import PropTypes from 'prop-types';

const TodoItem = ({ id, label, handleDone, handleTrash, handleImportant, important = false, done = false }) => {
    return (
        <div key={id} className={style.todoItem + ' ' + (important ? style.important : '') + ' ' + (done ? style.done : '')}>
            <span
                onClick={handleDone}
                className={style.todoItemLabel} >
                { label }
            </span>

            <div className={style.buttons}>
                <button type="button"
                    onClick={handleTrash}
                    className={style.todoItemButton + ' ' + style.trash} >
                    <Trash2 />
                </button>

                <button type="button"
                    onClick={handleImportant}
                    className={style.todoItemButton + ' ' + style.important} >
                    <Zap />
                </button>
            </div>

        </div>
    );
};

TodoItem.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    handleDone: PropTypes.func,
    handleTrash: PropTypes.func,
    handleImportant: PropTypes.func,
    important: PropTypes.bool,
    done: PropTypes.bool
};

export default TodoItem;
