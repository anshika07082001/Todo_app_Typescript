import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../Features/todoSlice'

const TodoForm = () => {
    var dispatch = useDispatch()
    var titleRef = useRef<HTMLInputElement>(null)
    var descriptionRef = useRef<HTMLInputElement>(null)

    const addTodo=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(titleRef.current!==null && descriptionRef.current!==null){
                if(titleRef.current.value!=='' && descriptionRef.current.value!==''){
                var obj ={title:titleRef.current.value,description:descriptionRef.current.value}
                dispatch(add(obj))
                e.currentTarget.reset()
            }
            else{
                alert('Fill All Details')
            }
        }
    }

  return (
    <div className='bg-secondary-subtle shadow col-6 mt-3 m-auto p-5 rounded text-center'>
        <form onSubmit={(e)=>addTodo(e)}>
          <div className="mb-3 text-start">
            <label className="form-label">New Post</label>
            <input className=" form-control" ref={titleRef}/>
          </div>
          <div className="mb-3 text-start">
            <label  className="form-label">Description</label>
            <input className="form-control" ref={descriptionRef}/>
          </div>
          <button type="submit" className="btn btn-info text-white rounded mt-2 col-12">Submit</button>
        </form>
      </div>
  )
}

export default TodoForm