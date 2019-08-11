import React from "react";
import Routes from "./routes"
import MainNav from "./partials/main_nav";

export default function App () {

    var style = {
        backgroundColor: "beige"
    };

    return (
        <div className ="App" style={style}>
            <Routes/>
            <MainNav />
        </div>
    );
}