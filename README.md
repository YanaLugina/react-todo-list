# @yana4961/react-todo-list

> ToDo list react component

[![NPM](https://img.shields.io/npm/v/@yana4961/react-todo-list.svg)](https://www.npmjs.com/package/@yana4961/react-todo-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @yana4961/react-todo-list
```

## Usage

```jsx
import React, { Component } from 'react'

import TodoList from '@yana4961/react-todo-list'
import '@yana4961/react-todo-list/dist/index.css'

class Example extends Component {
  const todoData = [
      { label: 'one', id: 1, done: false, important: true },
      { label: 'two', id: 2, done: false, important: false },
      { label: 'three', id: 3, done: true, important: true },
  ];
  
  const yourHandleFunction = (updatedItems) => {
      console.log(updatedItems);
  }

  render() {
    return <TodoList todoData={todoData} handleMouseLeave={yourHandleFunction} />
  }
}
```

## License

MIT © [YanaLugina &lt;yana4961@gmail.com&gt;](https://github.com/YanaLugina)
