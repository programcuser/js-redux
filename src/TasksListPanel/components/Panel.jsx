import React from 'react';

const Panel = (props) => {
  return (
    <div className='py-3'>
      <button
        type='button'
        data-test='clean'
        className='btn btn-warning btn-sm mr-3'
        onClick={props.onClear}>
        Clean
      </button>
      <button
        type='button'
        data-test='generate'
        className='btn btn-primary btn-sm'
        onClick={props.onGenerate}>
        Generate
      </button>
    </div>
  );
};

export default Panel;
