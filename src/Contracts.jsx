import React ,{useState} from "react"

function Contracts(){

    const [contracts, setContract] = useState([]);
    const [contractNumber, setContractNumber] = useState();
    const [contractName, setContractName] = useState();
    const [contractPayment, setContractPayment] = useState();

    function addContract(){
        const newContract = {number: contractNumber ,name: contractName ,payment: contractPayment}

        setContract(c => [...c, newContract])
        setContractNumber("");
        setContractName("");
        setContractPayment("");
    }

    function removeContract(index){
        setContract(c => c.filter((_,i) => i !== index));
    }

    function changeNumber(event){
        setContractNumber(event.target.value);
    }

    function changeName(event){
        setContractName(event.target.value);
    }

    function changePayment(event){
        setContractPayment(event.target.value)
    }

    return(
        <div className="contract-select">
            <p>The contracts are listed: Contract Number | Company Name | Contract Payment</p>
            <ul>
                {contracts.map((contract,index) => <li key={index} onClick={() => removeContract(index)}>{contract.number} | {contract.name} | {contract.payment}</li>)}
            </ul>
            <input type="number" value={contractNumber} onChange={changeNumber} placeholder="Enter the contract number"/> <br />
            <input type="text" value={contractName} onChange={changeName} placeholder="Enter the name of the company in the contract"/> <br />
            <input type="text" value={contractPayment} onChange={changePayment} placeholder="Enter the agreed payment for the contract"/> <br />
            <button className="creation-button" onClick={addContract}>Add Contract</button>
        </div>
    );
}

export default Contracts