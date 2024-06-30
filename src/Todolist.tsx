import React from 'react';

export type TasksType = {
    id: number;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TasksType>;
    removeTask: Function;
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(task =>
                    <li><input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={() => {
                            props.removeTask(task.id)
                        }}>x
                        </button>
                    </li>
                )}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>);
}