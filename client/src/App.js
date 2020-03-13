import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import indexPage from "./pages/index";
import savedPage from "./pages/saved";
import frontPage from "./pages/Frontpage";

export default function App(props) {
    const [authTokens, setAuthTokens] = useState(localStorage.getItem("tokens"));

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <div>
                    <Switch>

                        <Route exact path="/" component={indexPage} />

                        <Route exact path="/maximalist" component={frontPage} />

                        <Route path='/login' component={Login} />

                        <Route path='/signup' component={Signup} />

                        <PrivateRoute exact path="/saved" component={savedPage} />
                        <PrivateRoute path='/admin' component={Admin} />

                    </Switch>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

