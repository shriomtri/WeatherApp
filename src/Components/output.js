import React from 'react'

const Output = (props) => (

    <div className="userData" style={{margin: "10px",}}>

        {<p><h3>Name: </h3> {props.name} </p>}
        {<p><h3>Username: </h3> {props.username} </p>}
        {<p><img className="userUrl" src={props.avatarUrl} alt="User github avatar"/></p>}

    </div>

);

export default Output