import React, {Component} from 'react';
import './App.css';

import Title from './Components/title'
import Search from './Components/search'
import Output from './Components/output'

const baseURL = "https://api.github.com/users/";
let timeout = null;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            name: "",
            avatarUrl: ""
        };

        this.handleOnChange = this.handleOnChange.bind(this)

    }

    async getData(userName) {

        let fetch = require("node-fetch");

        let url = baseURL + userName;

        console.log(userName);

        let response = await fetch(url);
        return await response.json();

    }

    handleOnSearch(userName) {

        this.getData(userName).then((data) => {

            let name = data.login;

            if (name) {
                this.setState({
                    username: data.login,
                    name: data.name,
                    avatarUrl: data.avatar_url
                })
            } else {

                this.setState({
                    username: userName,
                    name: "No user exists",
                    avatarUrl: ""
                })
            }
        })

    }

    handleOnChange(event) {


        let userName = event.target.value;

        clearTimeout(timeout);

        timeout = setTimeout(this.handleOnSearch(userName), 1000)


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
                        <Output name={this.state.name} username={this.state.username} avatarUrl={this.state.avatarUrl}/>

                    </div>

                </div>
            </div>
        );

    }

}

export default App;
