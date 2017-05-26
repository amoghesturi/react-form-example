import React from 'react';

class InputTextBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    // Register methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <input type={this.props.type}
          value={this.state.value}
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default InputTextBox;
