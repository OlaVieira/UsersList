import React, {useState} from 'react';
import {UsersListOneItem} from "./UsersListOneItem";
import "./UsersList.css"

export const UsersList = props => {
    const [list, setList] = useState(props.users);
    const removeItem = username => {
        // bierzemy poprzednia liste i tworzymy na jej podstawie nowa przy uzyciu filter, biore pojedynczy element z listy i zostawiam go wylacznie jesli usename jest inny niz ten username ktory chce usunac
        // np [1,2,3].filter(one => one !== 2) //[1,3]
        setList(list => (
            list
                .filter(one => one.username !== username)
        ));
    };

    return (
        <ul className="UsersList">
        { // robimy destrukturyzacje tablicy i wtedy mozemy posortowac bo jest skopiowana
            [...list]
                .sort((a, b) => a.username.localeCompare(b.username))
                .map(userObj => <UsersListOneItem
                    user={userObj}
                    key={userObj.username}
                    onRemoveItem={removeItem}
                />)
        }
    </ul>
    )
};
