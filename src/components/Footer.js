import React from "react";
import "./Footer.css"

export default function Footer(props){
    return (
        <footer>
            <h3>{props.children}</h3>
        </footer>
    );
}