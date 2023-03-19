import React from "react";
import { useState } from "react";

const PersonCard = (props) => {
    const [count, setCount] = useState(props.age);

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{props.firstName}, {props.lastName}</h2>
            <p>Age: {count}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {increaseCount}>Birthday Button for {props.firstName} {props.lastName} </button>
        </div>
    )
}

export default PersonCard;
