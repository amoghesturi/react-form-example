import React from 'react';

class InputSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Choose from the list'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    let values = this.props.values;
    let selectOptions = values.map( (value, i) => {
      return <option key={i} value={value} >{value}</option>
    });
    return <div>
    <legend>{this.props.title}</legend>
      <select onChange={this.handleChange}>
        {selectOptions}
      </select>
    </div>
  }
}

export default InputSelectBox;
