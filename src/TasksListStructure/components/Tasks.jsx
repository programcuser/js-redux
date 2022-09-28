import React from 'react';

const CrossingElement = (props) => {
  if (props.state === 'active') {
    return props.children;
  } else if (props.state === 'finished') {
    return <s>{props.children}</s>;
  }
  // return props.state === 'active' ? props.children : <s>{props.children}</s>;
};

const Tasks = (props) => {
  const { tasks: { byId, allIds } } = props;
  // console.log(byId);

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { allIds.map(id => (
          <li key={id} className='list-group-item d-flex'>
            <CrossingElement state={byId[id.toString()].state}><span className='mr-auto' onClick={props.onCross(id)}>{byId[id.toString()].text}</span></CrossingElement>
            <button type='button' className='close' aria-label='Close' onClick={props.onRemove(id)}>
              <span>×</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
