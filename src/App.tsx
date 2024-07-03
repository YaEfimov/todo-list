import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from './Todolist';

export type FilterValueType  = 'all' |'completed' |'active'

function App() {

    let [tasks, setTasks] = useState<TasksType[]>([
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: false},
            {id: 3, title: 'ReactJS', isDone: true},
            {id: 4, title: 'Redux', isDone: false}]
        )
    ;

    let [filter, setFilter] = useState<FilterValueType>("all")

    const removeTask = (id: number) => {

        let filteredTask = tasks.filter((task) => {
            return id !== task.id
        })

        setTasks(filteredTask)
    }

    let taskForTodoList = tasks;

    const changeFilter = (value: FilterValueType) => {
        setFilter(value);
    }

    if (filter === "completed"){
        taskForTodoList = tasks.filter(task => task.isDone)
    }

    if (filter === "active"){
        taskForTodoList = tasks.filter(task => !task.isDone)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={taskForTodoList} removeTask={removeTask} changeFilter = {changeFilter}/>
        </div>
    );
}

export default App;



