import React, { Component } from 'react';
import '../css/style.css'

class HuListComponent extends Component {

    constructor() {
        super()
        this.state = { hus: localStorage.getItem('hus') ? JSON.parse(localStorage.getItem('hus')) : [] }
    }

    saveInLocalStorage = () => {
        if (!this.state.hus.includes(this.props.huName) && this.props.huName !== undefined) {
            let husArray = this.state.hus;
            husArray.push(this.props);
            this.setState(this.husArray);
            localStorage.setItem('hus', JSON.stringify(this.state.hus))
        }
    }

    handleRemove = (e) => {

    }

    render() {
        this.saveInLocalStorage()
        let huArrays = [];
        this.state.hus.forEach(hu => huArrays.push(
            <div className="card" key={hu.name}>
                <section className="controls">
                        <p>{hu.huName}</p>
                        <p>{hu.huPoints}</p>
                </section>
                <section className="time">
                    <button>Begin</button>
                    <button>remove</button>
                </section>
            </div>))
        return huArrays;
    }
}

export default HuListComponent