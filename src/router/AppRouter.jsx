import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
  } from "react-router-dom";
import { DetailsScreen } from '../components/details/DetailsScreen';
import  { HomeScreen } from '../components/home/HomeScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/navbar/Navbar';

export default function AppRouter (){
  return (
    <Router>
      <div>
        <Navbar/>

        <Switch>
            <Route  path='/detalle/:id' component={ DetailsScreen } />
            <Route  path='/search' component={ SearchScreen } />
            <Route path='/' component={ HomeScreen } />

            <Redirect to='/' component={ HomeScreen } />
        </Switch>
      </div>
    </Router>
  )
}
