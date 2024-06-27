import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css'; // Tell webpack that Button.js uses these styles

export default function App() {
    return (
        <div className="container">
            {/* <Navbar /> */}
            <Main />
        </div>
    )
}
