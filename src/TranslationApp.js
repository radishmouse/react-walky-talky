import React, {Component} from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

class TranslationApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }
    
    render() {
        return (
            <div>
                <InputBox 
                    theText={this.state.text}                    
                    handleChange={this._updateText}
                />
                <OutputBox 
                    theText={this.state.text}
                />
            </div>
        );
    }

    _updateText = (text) => {
        this.setState({
            text
        });
    }
}

export default TranslationApp;