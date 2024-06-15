import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {
    let tasks1 = [{id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}]

    let tasks2 = [{id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Jentlment of fortune", isDone: true}]

    return (
        <div className="App">
            <Todolist title="What to learn"/>
            <Todolist title="Movies"/>

        </div>
    );
}

export default App;
