import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import indexPage from "./pages/index";
import cartPage from "./pages/cart";
import frontPage from "./pages/Frontpage";

export default function App() {
    return (


        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={indexPage} />

                    <Route exact path="/cart" component={cartPage} />

                    <Route exact path="/maximalist" component={frontPage} />
                </Switch>
            </div>
        </Router>

    );
}

