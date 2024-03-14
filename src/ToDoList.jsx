import React ,{useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(["Make an offer to Cybersecure", "Finish website for Gicu SRL", "Enter finished producs on the WEBSITE"]);
    const [newTask, setNewTask] = useState();

    function inputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){ 
        if(newTask !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h2>To do list</h2>
            <div>
                <input className="to-do-list-input" type="text" placeholder="Enter a task..." value={newTask} onChange={inputChange}/>
                <button className="creation-button" onClick={addTask}>Add to the list</button>
            </div>
            <ol>
            {tasks.map((task, index) => <li key={index} className="to-do-list-item">
                <span>{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="up-button" onClick={() => moveTaskUp(index)}>&#128077;</button>
                <button className="down-button" onClick={() => moveTaskDown(index)}>&#128078;</button>
                </li>)}
            </ol>

        </div>
    );
}

export default ToDoList