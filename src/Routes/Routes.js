import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from '../components/search/Search';
import ListCommits from '../components/list-commits/ListCommits';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/Search' component={ListCommits} />
                </Switch>
            </main>
        )
    }
};
        
export default Routes;