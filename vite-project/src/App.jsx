// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Todo from './comps/todo'

// function App() {
//   const [todoList, setTodoList] = useState([])
//   const [emptyValue, setEmptyValue] = useState('')
//   const [text, setText] = useState('try out')

//   const removeText = (dataId) => {
//     setTodoList(todoList.filter((data) => data.createdAt !== dataId));
//   };

// console.log(dataId)

//   return (
//     <div>
//       <h1>todo</h1>
//       <div>
//         <input type="text" className="mx-3" value={emptyValue} onChange={(e) =>{ setText(e.target.value); setEmptyValue(e.target.value)}} placeholder='text' />
//         <button onClick={() => {
//           const obj = {
//             text,
//             createdAt: Date.now(),
//           };
//           setTodoList([...todoList, obj]);
//           setEmptyValue('')
//               console.log(obj);
//         }}>+</button>
//       </div>
//       <div>
//         {todoList.map((data) => (
//           <Todo data={data} onRemove={removeText} key={data.createdAt} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App



import { useState } from 'react';

import './App.css';
import Todo from './comps/Todo'; // Assuming Todo component exists

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text) return; // Check if input is empty before adding

    const newTodo = {
      text,
      createdAt: Date.now(),
    };
    setTodoList([...todoList, newTodo]);
    setText(''); // Clear input after adding
  };

  const removeText = (dataId) => {
    setTodoList(todoList.filter((data) => data.createdAt !== dataId));
  };

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-4xl my-4'>Todo</h1>
      <div>
        <input
          type="text"
          className="mx-3"
          value={text} // Use text state for input value
          onChange={(e) => setText(e.target.value)}
          placeholder="text"
        />
        <button onClick={addTodo}>+</button>
      </div>
      <div  className='flex flex-col justify-center m-5'>
        {todoList.map((data) => (
          <Todo data={data} onRemove={removeText}  key={data.createdAt} />
        ))}
      </div>
    </div>
  );
}

export default App;