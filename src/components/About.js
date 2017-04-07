import React from 'react'
import Header from './Header.js'
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
                </div>
            </div>
        );
    }
}

export default About;
