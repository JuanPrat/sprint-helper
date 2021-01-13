import React, { Component } from 'react';

class HuListComponent extends Component {

    constructor() {
        super()
        this.state = { hus: localStorage.getItem('hus') ? JSON.parse(localStorage.getItem('hus')) : new Array() }
    }

    saveInLocalStorage = () => {
        console.log(this.state.hus.includes(this.props));
        debugger
        if (!this.state.hus.includes(this.props.huName) && this.props.huName !== undefined) {
            let husArray = this.state.hus;
            husArray.push(this.props);
            this.setState(this.husArray);
            localStorage.setItem('hus', JSON.stringify(this.state.hus))
        }
    }

    render() {
        this.saveInLocalStorage()
        let huArrays = new Array();
        debugger
        this.state.hus.forEach(hu => huArrays.push(
            <div>
                <p>{hu.huName}</p>
                <p>{hu.huPoints}</p>
            </div>))
        return huArrays;
    }
}

export default HuListComponent