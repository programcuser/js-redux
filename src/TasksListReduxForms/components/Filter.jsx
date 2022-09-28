import React from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    filter: state.filter,
  };
  return props;
};

const actionCreators = {
  setFilterState: actions.setFilterState,
};


const Filter = (props) => {
  const { filter } = props;
  // console.log(byId);
  const handlerSetFilterAll = (_event) => {
    const { setFilterState } = props;
    setFilterState({ value: 'all' });
  };

  const handlerSetFilterActive = (_event) => {
    const { setFilterState } = props;
    setFilterState({ value: 'active' });
  };

  const handlerSetFilterFinished = (_event) => {
    const { setFilterState } = props;
    setFilterState({ value: 'finished' });
  };

  return (
    <div className="mt-3 d-flex justify-content-around">
      { filter === 'all' ? 'All Tasks' : <button type='button' className='btn btn-link border-0 p-0' onClick={handlerSetFilterAll}>
        All Tasks
      </button>}
      { filter === 'active' ? 'Active Tasks' : <button type='button' className='btn btn-link border-0 p-0' onClick={handlerSetFilterActive}>
        Active Tasks
      </button>}
      { filter === 'finished' ? 'Finished Tasks' : <button type='button' className='btn btn-link border-0 p-0' onClick={handlerSetFilterFinished}>
        Finished Tasks
      </button>}
    </div>
  );
};

// export default Filter;
export default connect(mapStateToProps, actionCreators)(Filter);
