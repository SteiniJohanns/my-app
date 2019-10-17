import React from 'react';
//import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    return (
      <div>
        <label> {this.props.name} </label>
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={e => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

/* Input.propTypes = {
  handleChange: PropTypes.func
};

Input.defaultProps = {
  handleChange: () => {}
}; */

export default Input;
