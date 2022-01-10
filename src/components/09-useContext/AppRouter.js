import React from 'react';
import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route exact path={"/"} element={<HomeScreen/>}/>
                        <Route exact path={"/about"} element={<AboutScreen/>}/>
                        <Route exact path={"/login"} element={<LoginScreen/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default AppRouter;