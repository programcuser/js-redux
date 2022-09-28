const reducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TEXT': {
      const { text } = action.payload;
      return state + text;
    }
    case 'RESET_TEXT': {
      return '';
    }
    default:
      return state;
  }
}

export default reducer;
