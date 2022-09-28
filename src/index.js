import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import './index.css';
// import App from './App'; // initial demo
import { legacy_createStore as createStore, compose, applyMiddleware }  from 'redux';
/*
//index4 - manual integration with React
import App from './FormApp/App.jsx';
import reducer from './FormApp/reducers.js';
*/
import { Provider } from 'react-redux';
//index6 - Redux(Reacr)
// import App from './TasksList/components/App.jsx';
// import reducer from './TasksList/reducers/index.js';
//index7
// import App from './TasksListPanel/components/App.jsx';
// import reducer from './TasksListPanel/reducers/index.js';
//index8 - Readux Actions
// import App from './TasksListActions/components/App.jsx';
// import reducer from './TasksListActions/reducers/index.js';
//index9 - State Structure
// import App from './TasksListStructure/components/App.jsx';
// import reducer from './TasksListStructure/reducers/index.js';
//index10 - UI State
// import App from './TasksListUiState/components/App.jsx';
// import reducer from './TasksListUiState/reducers/index.js';
//index11 - Reselect library
// import App from './TasksListReselect/components/App.jsx';
// import reducer from './TasksListReselect/reducers/index.js';
//index12 - Redux Forms
// import App from './TasksListReduxForms/components/App.jsx';
// import reducer from './TasksListReduxForms/reducers/index.js';
//index13 - Redux Thunk
import App from './TasksListReduxThunk/components/App.jsx';
import reducer from './TasksListReduxThunk/reducers/index.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


/*
//-------------------index4 - manual integration with React-----------------//
// const mountNode = document.getElementById('container');
// const root = ReactDOM.createRoot(mountNode);

const store = createStore(reducer);

const updateText = (text) => ({ type: 'UPDATE_TEXT', payload: { text } });
const resetText = () => ({ type: 'RESET_TEXT', payload: {} });

store.subscribe(() => {
  const state = store.getState();
  // console.log(state);
  root.render(
    <App dispatch={store.dispatch} text={state} updateText={updateText} resetText={resetText} />
  );
});

//text="text from store"
root.render(
  <App
    dispatch={store.dispatch}
    updateText={updateText}
    resetText={resetText}
  />
);
//------------------------------------------------------------------------------//
*/

//-------------------index6 - Redux(React)
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index7 - Передача действий
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index8 - Redux Actions
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index9 - State Structure
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index10 - Ui State
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index11 - Reselect library
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index12 - Redux Forms
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
// const store = createStore(reducer, reduxDevtools && reduxDevtools());

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//-------------------index13 - Redux Thunk
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    reduxDevtools && reduxDevtools(),
  )
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
