import React, {useState} from "react";

function ListAdder(){

    const [requests, setRequests] = useState(["mobile integration","logo design"]);

    function addRequest(){
        const newRequest = document.getElementById("requestInput").value;
        document.getElementById("requestInput").value = "";

        setRequests(r => [...r, newRequest]);
    }

    function removeRequest(index){
        setRequests(requests.filter((_, i) => i !== index))
    }

    return(
        <div className="creation">
            <h2>List of Requests</h2>
            <ul>
                {requests.map((request, index) => <li key={index} onClick={() => removeRequest(index)} className="adder-list">{request}</li>)}
            </ul>
            <input type="text" id="requestInput" placeholder="Enter your request"/>
            <button onClick={addRequest} className="creation-button">Add Request</button>
        </div>
    );
}

export default ListAdder