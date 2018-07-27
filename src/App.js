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

// //Search by component
// class Search extends Component {
//     constructor(props) {
//         super(props)
//
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" className="search input-lg" placeholder="Username" onChange={this.props.onChange}/>
//             </div>
//         )
//     }
// }

//Search by variable
const Search = (props)=>(
    <div>
        <input type="text" className="search input-lg" placeholder="Username" onChange={props.onChange}/>
    </div>
);


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

        let response = await fetch(url);
        let data = await response.json();

        let name = data.login;

        if(name) {

            this.setState({
                username: data.login,
                name: data.name,
                avatarUrl: data.avatar_url
            })

        }else{

            this.setState({
                username: userName,
                name: "No user exists",
                avatarUrl: ""
            })

        }

    }


    //getTheUserHandle
    handleOnChange(event) {

        let userName = event.target.value;

        this.getData(userName)

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

                        <div className="userData" style={{margin: "10px",}}>

                            {<p><h3>Name: </h3> {this.state.name} </p>}
                            {<p><h3>Username: </h3> {this.state.username} </p>}
                            {<p> <img className="userUrl" src={this.state.avatarUrl}/></p>}

                        </div>

                    </div>

                </div>
            </div>
        );

    }

}

export default App;
