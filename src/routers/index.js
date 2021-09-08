import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Home } from "../screens/home";
import { FAQ } from "../screens/faq";
import { CashBack } from "../screens/chashback";
import { Job } from "../screens/job";


export const Navigation = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/CashBack" component={CashBack} />
            <Route path="/Job" component={Job} />
            <Route render={() => <h1>No Match</h1>} />
        </Switch>
    )
}