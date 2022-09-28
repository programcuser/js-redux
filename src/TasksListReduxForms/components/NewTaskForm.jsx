import React from 'react';
import { reduxForm } from 'redux-form';
import  { Field } from 'redux-form';

class NewTaskForm extends React.Component {
  addTask = (values) => {
    this.props.addTask({ text: values.text });
    this.props.reset();
  }

  render() {
    return (
      <form action='' className='form-inline' onSubmit={this.props.handleSubmit(this.addTask)}>
        <div className='form-group mx-sm-3'>
          <Field name='text' required component='input' type='text' />
        </div>
        <input type='submit' className='btn btn-primary btn-sm' value='Add'></input>
      </form>
    );
  }
};

// export default NewTaskForm;
export default reduxForm({
  form: 'newTask',
})(NewTaskForm);
