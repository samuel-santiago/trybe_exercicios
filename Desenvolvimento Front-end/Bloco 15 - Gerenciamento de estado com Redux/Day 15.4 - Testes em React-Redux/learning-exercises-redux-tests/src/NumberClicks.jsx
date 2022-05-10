import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

function NumberClicks(props) {
  const { counter } = props;
  return <div>{ counter }</div>;
}

const mapStateToProps = (state) => ({ counter: state.clickReducer.counter });

NumberClicks.propTypes = {
  counter: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(NumberClicks);
