import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Movies from "./movies/index";
import MovieNew from "./movies/new";
import MovieShow from "./movies/show";
import MovieEdit from "./movies/edit";
import MovieDestroy from "./movies/destroy";

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/new" component={MovieNew} />
            <Route exact path="/movies/:id" component={MovieShow}/>
            <Route exact path="/movies/:id/edit" component={MovieEdit}/>
            <Route exact path="/movies/:id/destroy" component={MovieDestroy}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout}/>
        </Switch>
    );
}

export default Routes;

