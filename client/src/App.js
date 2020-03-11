import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import indexPage from "./pages/index";
import savedPage from "./pages/saved";
import frontPage from "./pages/Frontpage";

export default function App() {
    return (


        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={indexPage} />

                    <Route exact path="/saved" component={savedPage} />

                    <Route exact path="/maximalist" component={frontPage} />
                </Switch>
            </div>
        </Router>

    );
}

