import React from 'react'
import Header from './Header.js'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='container'>
          <div className='jumbotron'>
            <h1 className='header'>Welcome to my website!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
