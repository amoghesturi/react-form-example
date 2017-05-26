import React, {Component} from 'react';
import InputTextBox from './InputTextBox.js'
import InputCheckBox from './InputCheckBox.js'

class App extends Component {
  render() {
    return (
      <div>
        <InputTextBox title="Input text:" type="text" />
        <InputCheckBox title="Input checkbox" name="checkbox" />
      </div>
    );
  }
}
export default App;
