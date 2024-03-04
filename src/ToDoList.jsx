import React ,{useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(["Make an offer to Cybersecure", "Finish website for Gicu SRL", "Enter finished producs on the WEBSITE"]);
    const [newTask, setNewTask] = useState();

    function inputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
        <div className="to-do-list">
            <h2>To do list</h2>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={inputChange}/>
                <button className="creation-button" onClick={addTask}>Add to the list</button>
            </div>
            <ol>
            {tasks.map((task, index) => <li key={index}>
                <span>{task}</span>
                <button className="delete-button" onClick={deleteTask(index)}>Delete</button>
                </li>)}
            </ol>

        </div>
    );
}

export default ToDoList