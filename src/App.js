import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import WatchList from './pages/WatchList/WatchList'
import Watched from './pages/Watched/Watched'
import Add from './pages/Add/Add'
import './App.scss'
import './lib/font-awesome/css/all.min.css'
import { GlobalProvider } from './context/GlobalState'
import { AppContainer, AppInner } from './styled'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <AppContainer>
          <AppInner>
            <Header />
            <Switch>
              <Route path="/" exact component={WatchList} />
              <Route path="/watched" component={Watched} />
              <Route path="/add" component={Add} />
            </Switch>
          </AppInner>
        </AppContainer>
      </Router>
    </GlobalProvider>
  );
}

export default App
