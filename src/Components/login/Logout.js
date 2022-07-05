import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Logout extends Component {
    componentDidMount () {
         

        
    }

    render () {
        return (
            <div>
                <Link to="/login"></Link>
            </div>
        )
    }
}



export default (Logout);