import React from 'react';
// import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import  { Field } from 'redux-form';
import * as actions  from '../actions/index.js';

// const mapStateToProps = (state) => {
//   const props = {
//   };
//   return props;
// };

// const actionCreators = {
//   addTask: actions.addTaskAsync,
// };

class NewTaskForm extends React.Component {
  addTask = (values) => {
    this.props.addTask({ text: values.text });
    this.props.reset();
  }

  render() {
    const disabledInput = this.props.submitting;
    const disabledSubmit = this.props.submitting || this.props.pristine;
    return (
      <form action='' className='form-inline' onSubmit={this.props.handleSubmit(this.addTask)}>
        <div className='form-group mx-sm-3'>
          <Field name='text' input={{ disabled: disabledInput, }} required component='input' type='text' />
        </div>
        <input type='submit' disabled={disabledSubmit} className='btn btn-primary btn-sm' value='Add'></input>
      </form>
    );
  }
};

// export default NewTaskForm;
export default reduxForm({
  form: 'newTask',
})(NewTaskForm);
// export default reduxForm({
//   form: 'newTask',
// })(connect(mapStateToProps, actionCreators)(NewTaskForm));

// export default connect(mapStateToProps, actionCreators)(reduxForm({
//   form: 'newTask',
// })(NewTaskForm));
