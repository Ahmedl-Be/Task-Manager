import React, { createContext, useState } from 'react'
// import uuid from "uuid"
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
const [tasks,setTasks] = useState([
        {title:"read a book" , id:1},
        {title:"learn react" , id:2},
        {title:"use context" , id:3},
    ]);


    const [editItem,setEditItem] = useState(null);


    const addTask = title => {
        setTasks([...tasks,{title, id:Math.random()}])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = ()=> {
        setTasks([])
    }

    //update functionallty
    const findItem = id =>{
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }

    const editTask = (title,id)=>{
        const newTasks = tasks.map(task => 
            (task.id===id) ? [title,id] : task );
            setTasks(newTasks);
    }

return (
    <TaskListContext.Provider 
    value={{tasks,addTask,removeTask,clearList,findItem,editTask,editItem}}>
        {props.children}
    </TaskListContext.Provider>
)
}

export default TaskListContextProvider;