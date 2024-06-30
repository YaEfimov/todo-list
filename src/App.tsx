import React, {useCallback, useState} from 'react';
import './App.css';
import {TasksType, Todolist} from './Todolist';


function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}]);

    const [filter, setFilter] = useState("all")

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }








    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
            {/*<Todolist title="Songs" tasks={tasks2}/>*/}
        </div>
    );
}

export default App;



