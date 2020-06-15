import React from "react";
import ListItem from "./ListItem";
import "./List.css"

export default function List(props) {
    return (
        <ul className="List">
            {props.items.map(item => (
                <ListItem key={item} itemName = {item} />
            ))}
        </ul>
    );
}


/*
statt array list (siehe Zeile 4)ginge auch die komplette Liste
<ListItem itemName="Sloper" />
<ListItem itemName="Pinch" />
<ListItem itemName="Crimp" />
*/
