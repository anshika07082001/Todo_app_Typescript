import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { state } from './Type';

function App() {
  var useAppSelector:TypedUseSelectorHook<state>=useSelector
  var state=useAppSelector((state)=>state)

  return (
    <div className='col-12 d-flex flex-column'>
      <h3 className='text-center mt-2'>My Articles</h3>
      <TodoForm/>
      {state.todoSlice.todoArr.length>0?
      <TodoList/>:<></>}
    </div>
  );
}

export default App;
