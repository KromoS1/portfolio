import React from 'react';
import './App.css';
import {Navigate} from "./Components/Navigate/Navigate";
import {Contents} from "./Components/Contents/Contents";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigate />
                <Contents />
            </div>
        </BrowserRouter>
    );
}

export default App;