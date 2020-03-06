import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import indexPage from "./pages/index";
import cartPage from "./pages/cart";

export default function App() {
    return (


        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={indexPage} />

                    {/* <Route exact path="/cart" component={cartPage} /> */}
                </Switch>
            </div>
        </Router>

    );
}

