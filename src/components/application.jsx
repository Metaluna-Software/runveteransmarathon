import React from 'react';

class Application extends React.Component {

  render() {
    const message = 'Call Sam Bird';
    return <div className='page-layout'>
      <div className='header'></div>
      <p>{message}</p>
      </div>
  }
}

export default Application;
