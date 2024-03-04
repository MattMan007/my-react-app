import React, {useState} from 'react';
import Counter from './Counter';
import ColorPicker from './ColorPicker'

function SiteCreation(){
    const [name, setName] = useState();
    const [comments, setComments] = useState();
    const [buget, setBuget] = useState(0);
    const [maintenance, setMaintenance] = useState(false);
    const [style, setStyle] = useState();
    const [clientType, setClientType] = useState();

    function updateName(event){
        setName(event.target.value);
    }

    function updateComments(event){
        setComments(event.target.value);
    }

    function updateBuget(event){
        setBuget(event.target.value);
    }

    function selectStyle(event){
        setStyle(event.target.value);
    }

    function selectClientType(event){
        setClientType(event.target.value);
    }

    const toggleMaintenanceStatus = () => {
        setMaintenance(!maintenance);
    }

    return(
    <div className='creation'>
        <p className='creation-title'>Select options for your website creation:</p>

        <p className='creation-text'>Name: {name}</p>
        <input value={name} onChange={updateName} type="text" placeholder='Basic Website Name' className='creation-input'/>

        <p className='creation-text'>Buget: {buget} euro</p>
        <input value={buget} onChange={updateBuget} type="number" placeholder='Round number in EURO' className='creation-input'/>

        <p className='creation-text'>Maintenance package: {maintenance ? "Yes" : "No"}</p>
        <button className='creation-button' onClick={toggleMaintenanceStatus}>Change Status</button>

        <p className='creation-text'>Select the number of pages you want your website to have:</p>
        <Counter></Counter>

        <p className='creation-text'>Tell us what other comments or features you want:</p>
        <textarea value={comments} onChange={updateComments} type="text" placeholder='write comments here' className='creation-comments'/>

        <p className='creation-text'>Select a style for your website:</p>
        <select value={style} onChange={selectStyle} className='creation-input'>
            <option value="">Select an option</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Creative">Creative</option>
            <option value="Gamified">Gamified</option>
            <option value="Artwork">Artwork</option>
            <option value="Pixel Art">Pixel Art</option>
        </select>

        <p className='creation-text'>Select a client type:</p>
        <label>
            <input type="radio" value="Personal" checked={clientType === "Personal"} onChange={selectClientType}/>
            <span className='creation-text'>Personal</span>
        </label> <br />
        <label>
            <input type="radio" value="Company" checked={clientType === "Company"} onChange={selectClientType}/>
            <span className='creation-text'>Company</span>
        </label>
        <ColorPicker type="main"></ColorPicker>
        <ColorPicker type="secondary"></ColorPicker>


    </div>);
}

export default SiteCreation