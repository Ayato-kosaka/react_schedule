import React from 'react';
import './App.css';

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
