import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './TodoApp.module.css';

function createTodoItem(label, id) {
    return {
        label,
        important: false,
        done: false,
        id: id
    };
}

const TodoApp = ({ todoData }) => {
    let ids = 100;
    const [todoDataLocal, setTodoDataLocal] = useState(todoData || []);

    useEffect(() => {
        setTodoDataLocal(() => {
            if (todoData) {
                return [
                    ...todoData.map((item) => {
                        return createTodoItem(item.label, item.id);
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
        <div className={style.test}>
            {
                todoDataLocal.length > 0
                    ? todoDataLocal.map(item => {
                        return (<div key={item.id}>{ item.label }</div>);
                    })
                    : ''
            }
        </div>
    );
};

TodoApp.propTypes = {
    todoData: PropTypes.array
};

export default TodoApp;
