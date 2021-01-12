import React, { Component } from 'react';

class HuListComponent extends Component {
    render(){
        debugger
        console.log(this.props)
        return <div>
            <p>{this.props.huName}</p>
            <p>{this.props.huPoints}</p>
        </div>;
    }
}

export default HuListComponent