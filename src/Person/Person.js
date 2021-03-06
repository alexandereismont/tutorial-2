import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };

    return(
        <div className="Person" style={style}>
            <p onClick={props.click} >My name is {props.name } and i am {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}
//{Math.floor(Math.random() * 30)}
export default Radium(person);