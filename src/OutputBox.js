import React from 'react';

const OutputBox = (props) => {

    let textToDisplay = props.theText;
    if (props.transformFunction) {
        textToDisplay = props.transformFunction(props.theText);
    }

    return (
        <div className='output-box'>
            {textToDisplay}
        </div>        
    );
};

export default OutputBox;