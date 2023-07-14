import React,{useContext, useState,useEffect} from 'react'
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const {addTask,clearList,editItem} = useContext(TaskListContext);
    const [title,setTitle]= useState('')


const handlerChange = (e)=>{
    setTitle(e.target.value)
    
}

const handlerSubmit =(e)=>{
e.preventDefault();
addTask(title);
setTitle('');
}

useEffect(()=>{
    if(editItem !== null){
        setTitle(editItem.title)
    }else{
        setTitle("")
    }
},[editItem]);


return (
<form onSubmit={handlerSubmit} className='form'>
    <input className='task-input' 
    placeholder='Add Task...'
    required
    value={title}
    onChange={handlerChange}
    />
    <div className='buttons'>
        <button type='submit' 
        className='btn add-task-btn'
        >Add Task</button>
        <button  className='btn clear-btn' onClick={clearList}>
            Clear</button>
    </div>
</form>
)
}

export default TaskForm;