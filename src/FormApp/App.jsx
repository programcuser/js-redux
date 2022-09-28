import React from 'react';

export default class App extends React.Component {
  static defaultProps = {
    text: '',
  };

  handleUpdate = (event) => {
    const { dispatch, updateText } = this.props;
    // console.log(event.target.value);
    dispatch(updateText(event.target.value));
  };

  handleReset = () => {
    const { dispatch, resetText } = this.props;
    dispatch(resetText());
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <form>
          <input type="text" value={text} onChange={this.handleUpdate} />
          <button type="button" onClick={this.handleReset} >Reset</button>
        </form>
        { text && <div>{text}</div> }
      </div>
    )
  }
}
