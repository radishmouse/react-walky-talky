import React, {Component} from 'react';

import InputBox from './InputBox';
import OutputBox from './OutputBox';

import {
    toL33t, 
    toUpperCase
} from './translations';

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

            <OutputBox 
                theText={this.state.text}
                transformFunction={toUpperCase}
            />

            <OutputBox 
                theText={this.state.text}                
                transformFunction={toL33t}
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