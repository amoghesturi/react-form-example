import React from 'react';

export function RadioButton(props) {
  return <label>
    <input type="radio" name={props.name} value={props.value} onChange={props.onChange}/>
    {props.value}
    <br />
  </label>
}
