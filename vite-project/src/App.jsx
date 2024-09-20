import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './comps/Todo'

function App() {
  const [todoList, setTodoList] = useState([])
  const [text, setText] = useState('')
  const handleClear = () => {
    setText('');
  };

  const handleRemove = (itemId) => {
    setTodoList(todoList.filter((data) => data.id !== itemId));
  };

  
  return (
    <div>
      <div className=''>
        <h1 className="text-3xl font-bold underline my-3">
          Todo    </h1>
        <input type="text" className="me-2 bg-gray-200 rounded border border-slate-600	ps-2" onChange={(e) => { setText(e.target.value); }} placeholder='Add Todo' />
        <button className="bg-teal-200 rounded  border border-slate-600	  px-2 m-1" disabled={text == ""} onClick={() => {
          const obj = {
            text,
            id: Date.now(),
            complete: false
          };
          setTodoList([...todoList, obj]);
          
          console.log(obj);

        }}>+</button>
      </div>
      <div className='my-3'>
        {todoList.map((data, ind) =>
          <Todo data={data} key={data.id} onRemove={handleRemove}/>


        )}
      </div >
    </div>
  )
}

export default App
