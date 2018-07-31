import React from 'react'

const Output = (props) => (

    <div className="userData" style={{margin: "10px",}}>

        {<div><h3>Name: </h3> <p>{props.name} </p></div>}
        {<div><h3>Username: </h3> <p>{props.username} </p></div>}
        {<div><img className="userUrl" src={props.avatarUrl} alt="User github avatar"/></div>}

    </div>

);

export default Output