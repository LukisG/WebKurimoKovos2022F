import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Main from './components/Pages/Main'
import Mars from './components/Pages/Mars'
import 'antd/dist/antd.css';
import './components/GetData.css'
import Errorpage from './components/Pages/Errorpage';
import Saved from './components/Pages/Saved';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="Mars" element={<Mars />} />
                <Route path="saved" element={<Saved />} />
                <Route path="*" element={<Errorpage />} />
            </Routes>
        </div>
    )
}