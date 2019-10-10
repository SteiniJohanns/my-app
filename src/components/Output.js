import React from 'react';
import PropTypes from 'prop-types';

class OutputInfo extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <div>List: {this.props.name}</div>
        <div>Sum: {this.props.value} </div>
      </div>
    );
  }
}

OutputInfo.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number
};

export default OutputInfo;
