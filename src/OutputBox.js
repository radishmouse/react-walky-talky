import React from 'react';

const OutputBox = (props) => {
    return (
        <div className='output-box'>
            {props.theText.toUpperCase()}
        </div>        
    );
};

export default OutputBox;