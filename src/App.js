import React, {Component} from 'react';
import './App.css';
import info from './info';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliders: info.sliders,
            position: 0,
        };
    }

    increment = () => {
        if(this.state.position === this.state.sliders.length -1){
            this.setState((prevState) => ({
                position: 0
            }));
        }
        else {
            this.setState((prevState) => ({
                position: prevState.position + 1
            }));
        }
    };

    render() {
        return (
            <div className='slider'>
                <h2>{this.state.sliders[this.state.position].title}</h2>
                <div className='content'>
                    <img alt="" src={this.state.sliders[this.state.position].imgSrc}/>
                    <h3>{this.state.sliders[this.state.position].subTitle}</h3>
                    <p>{this.state.sliders[this.state.position].text}</p>
                </div>
                <button onClick={this.increment}>Next</button>
            </div>
        );
    }
}

export default App;
