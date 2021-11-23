import React, { Component } from 'react'
import { Route, Routes } from "react-router";
import Header from "./common/HeaderComponent"
import Footer from "./common/FooterComponent"
import Home from './HomeComponent';

export class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main
