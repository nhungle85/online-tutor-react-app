import React, { Component } from 'react'
import { Route, Routes } from "react-router";
import Header from "./common/HeaderComponent"
import Footer from "./common/FooterComponent"
import Home from './HomeComponent';
import ContactUs from './ContactUsComponent';

export class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main
