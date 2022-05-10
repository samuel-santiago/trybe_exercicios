import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import addClick from './actions';

function ButtonClicks(props) {
  const { add } = props;
  return (
    <div>
      <button type="button" onClick={add}>Clique aqui</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({ add: () => dispatch(addClick()) });

ButtonClicks.propTypes = {
  add: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ButtonClicks);
