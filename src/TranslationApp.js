import React, {Component} from 'react';

import InputBox from './InputBox';
import OuputBox from './OutputBox';

class TranslationApp extends Component {
    render() {
        return (
          <div className='translation-app'>
            <InputBox />
            <OuputBox />
          </div>            
        );
    }
}

export default TranslationApp;