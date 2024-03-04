import React, {useState} from 'react';
import PropTypes from 'prop-types';

function ColorPicker(props){

    const [color, setColor] = useState("#FF0000");

    function changeColor(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker">
            <h2>Select a {props.type} color for your website:</h2>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={changeColor} className='colour-input'/>
        </div>
    );
}
ColorPicker.proptypes = {
    type: PropTypes.string,
}
export default ColorPicker