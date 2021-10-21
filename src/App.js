import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Top from './components/pages/Top'
import ItineraryList from './components/pages/ItineraryList'
import NewItinary from './components/pages/NewItinerary'

function App() {
  return (
    <>
      <header>
        React Schedule App
      </header>
      <Switch>
        <Route exact path="/top">
          <Top />
        </Route>
        <Route exact path="/itineraries">
          <ItineraryList />
        </Route>
        <Route path="/Itineraries/new">
          <NewItinary />
        </Route>
      </Switch>
    </>
  );
}

export default App;
