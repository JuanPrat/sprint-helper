import React, { Component } from 'react';
import HuListComponent from "./huListComponent"

class AddComponent extends Component {
    constructor() {
        super()
        this.state = {save: false}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ huName: this.huName.value, huPoints: this.huPoints.value, save: true});
    }
    render() {
        return <div>
            <form>
                <p>
                    <label htmlFor="hu-name">Hu Name: </label>
                    <input
                        name="hu-name"
                        id="hu-name"
                        placeholder="add the hu name or identifier"
                        ref={inputElement => this.huName = inputElement}
                    />
                </p>
                <p>
                    <label htmlFor="hu-points">Hu points: </label>
                    <input
                        name="hu-points"
                        id="hu-points"
                        placeholder="add the hu points"
                        ref={inputElement => this.huPoints = inputElement}
                    />
                </p>
                <button onClickCapture={this.handleSubmit}>Submit</button>
            </form>
            <HuListComponent huName={this.state.huName} huPoints={this.state.huPoints} save={this.state.save}/>
        </div>
    }
}

export default AddComponent;