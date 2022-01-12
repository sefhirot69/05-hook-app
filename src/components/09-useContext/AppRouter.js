import React from 'react';
import {
    BrowserRouter as Router, Redirect,
    Route, Routes,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import Navbar from "./Navbar";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar/>
                    <div className={"container"}>
                        <Routes>
                            <Route exact path={"/"} element={<HomeScreen/>}/>
                            <Route exact path={"/about"} element={<AboutScreen/>}/>
                            <Route exact path={"/login"} element={<LoginScreen/>}/>

                            <Route path={"*"} element={ <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default AppRouter;