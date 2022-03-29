import React from "react";
import './UsersListOneItem.css';

export const UsersListOneItem = props => {
    const personLiClicked = () => {
        props.onRemoveItem(props.user.username);
    }
    return (
        <li key={props.user.username} className="UsersListOneItem" onClick={personLiClicked}>
        <img className="UsersListOneItem__photo"
             src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
             alt={`Photo of ${props.user.first_name}`}/>
        <div className="UsersListOneItem__text">
            <p>{props.user.first_name} {props.user.last_name}</p>
            <p className="UsersListOneItem__username">{props.user.username}</p>
        </div>


    </li>
    )
};
