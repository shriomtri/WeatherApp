import React, {Component} from 'react';
import './App.css';

const baseURL = "https://api.github.com/users/";

//Title
function Title() {
    return (
        <div className="container">
            <img className="gifImg" src="https://media.giphy.com/media/12zV7u6Bh0vHpu/giphy.gif"/>
            <div className="title">
                <h2> GitHub</h2>
                <h5>Find out your self on github.</h5>
            </div>
        </div>
    );

}

//Search
class Search extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <input type="text" className="search input-lg" placeholder="Username" onChange={this.props.onChange}/>
            </div>
        )
    }
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };

        this.handleOnChange = this.handleOnChange.bind(this)

    }

    //getTheUserHandle
    handleOnChange(event) {

        console.log("I am here");
        let userHandle = event.target.value;

        this.setState({username: userHandle});
        console.log(userHandle);

    }

    render() {

        return (
            <div className="container main card">
                <div className="row">
                    <div className="col-md-6 titleColumn">
                        <Title/>
                    </div>

                    <div className="col-md-6 searchColumn">

                        <Search onChange={this.handleOnChange}/>

                        <h2>{this.state.username}</h2>

                    </div>

                </div>
            </div>
        );

    }

}

export default App;
