import React from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../Features/todoSlice'
import { state } from '../Type'

const TodoList = () => {
    var dispatch = useDispatch()
    var useAppSelector:TypedUseSelectorHook<state>=useSelector
    var state=useAppSelector((state)=>state)

    const deleteHandler=(i:number)=>{
        dispatch(deleteData(i))
    }

  return (
    <div className='col-md-6 col-sm-8 d-flex flex-column m-auto mt-4 bg-secondary-subtle rounded shadow p-4'>
        <h3 className='text-center'>Articles List</h3>
        {state.todoSlice.todoArr.map((item,i)=>{
            return(
                <div className='d-flex mt-2 flex-column p-3 col-12 bg-light shadow-sm rounded'>
            <label className='fw-bold fs-3'>{item.title}</label>
            <div className='d-flex col-12 flex-md-row flex-sm-column col justify-content-between align-items-start'>
                <span>{item.description}</span>
                <button className='btn-danger btn' onClick={()=>deleteHandler(i)}>Delete</button>
            </div>
        </div>
            )
        })}
    </div>
  )
}

export default TodoList