import React, {Component} from 'react';

import InputBox from './InputBox';
import OutputBox from './OutputBox';

class TranslationApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
          <div className='translation-app'>
            <InputBox 
                theText={this.state.text}
                changeHandler={this._updateText}
            />
            <OutputBox 
                theText={this.state.text}
            />
          </div>            
        );
    }

    _updateText = (newText) => {
        console.log(this);
        this.setState({
            text: newText
        });
    }
}

export default TranslationApp;