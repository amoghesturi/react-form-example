import React from 'react'
import {RadioButton} from './RadioButton.js'

class InputRadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: e.target.value
    })
  }

  render() {
    let radioButtonValues = this.props.values;
    let radioButtons = radioButtonValues.map((value, i) => {
      return <RadioButton key={i} name={this.props.name} value={value} onChange={this.handleChange}/>
    });
    return <div>
      <legend>{this.props.title}</legend>
        {radioButtons}
    </div>
  }
}

export default InputRadioButtonGroup;
