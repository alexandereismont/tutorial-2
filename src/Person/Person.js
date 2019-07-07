import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click} >My name is {props.name } and i am {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}
//{Math.floor(Math.random() * 30)}
export default person;