import React from 'react';

const NewTaskForm = (props) => {
  return (
    <form action='' className='form-inline' onSubmit={props.onSubmit}>
      <div className='form-group mx-sm-3'>
        <input type='text' required value={props.newTaskText} onChange={props.onUpdate}/>
      </div>
      <input type='submit' className='btn btn-primary btn-sm' value='Add'></input>
    </form>
  );
};

export default NewTaskForm;
