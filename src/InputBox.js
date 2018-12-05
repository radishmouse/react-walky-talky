import React from 'react';

const InputBox = (props) => {
    return (
        <input 
            value={props.theText}
            onChange={(e) => {
                props.handleChange(e.target.value);
            }}
        />
    );
}

export default InputBox;