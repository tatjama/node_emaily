import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; 
import SurveyNew from './surveys/SurveyNew'

import Header from './Header';
import Landing from './Landing';
import  Dashboard from './Dashboard';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render(){
        return (
            <div className = "container">
                <BrowserRouter>                
                        <Header/>
                        <Route exact path = "/" component={ Landing }/>
                        <Route exact path = "/surveys" component={Dashboard}/>
                        <Route path = "/surveys/new" component={SurveyNew}/>                    
                </BrowserRouter>
            </div>
        );
    }    
};

export default connect(null, actions)(App);