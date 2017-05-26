import React, {Component} from 'react';
import InputTextBox from './InputTextBox.js';
import InputCheckBox from './InputCheckBox.js';
import InputRadioButtonGroup from './InputRadioButtonGroup';
import InputSelectBox from './InputSelectBox.js';

class App extends Component {
  render() {
    let genders = ['Male', 'Female', 'Other'];
    let residentStatus = ['Resident', 'NRI', 'PIO'];
    return (
      <div>
        <InputTextBox title="Input text:" type="text" />
        <InputCheckBox title="Input checkbox" name="checkbox" />
        <br />
        <InputRadioButtonGroup name="gender" values={genders} />
        <br />
        <InputRadioButtonGroup name="Resident status" values={residentStatus} />
      </div>
    );
  }
}
export default App;
