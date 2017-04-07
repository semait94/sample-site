import React from 'react'
import Header from './Header.js'
import poodle from '../../img/poodle.jpg'
class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className='container'>
                    <div className='jumbotron'>
                        <h1 className='header'>About me</h1>
                    </div>
                    <img src={poodle}/>
                    <p className="lead"> I am a poodle! Nice to meet you :) Let's be friends! </p>
                </div>
            </div>
        );
    }
}

export default About;
