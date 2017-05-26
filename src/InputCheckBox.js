import React from 'react'

class InputCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return <div>
      <label>{this.props.title}</label>
      <input type="checkbox"
        name={this.props.name}
        checked={this.state.isChecked}
        onChange={this.handleChange} />
    </div>
  }
}

export default InputCheckBox;
