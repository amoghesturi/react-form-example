import React, {Component} from 'react';
import InputTextBox from './InputTextBox.js';
import InputCheckBox from './InputCheckBox.js';
import InputRadioButtonGroup from './InputRadioButtonGroup';
import InputSelectBox from './InputSelectBox.js';

class App extends Component {
  render() {
    let genders = ['Male', 'Female', 'Other'];
    let residentStatus = ['Resident', 'NRI', 'PIO'];
    let browsers = ['Internet Explorer', 'Google Chrome', 'Mozilla Firefox', 'Safari'];
    return (
      <div>
        <InputTextBox title="Input text:" type="text" />
        <InputCheckBox title="Input checkbox" name="checkbox" />
        <br />
        <InputRadioButtonGroup name="gender" values={genders} />
        <br />
        <InputRadioButtonGroup name="Resident status" values={residentStatus} />
        <br />
        <InputSelectBox title="Browser" values={browsers} />
      </div>
    );
  }
}
export default App;
