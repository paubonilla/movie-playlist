import React from 'react'
import './App.scss'
import './lib/font-awesome/css/all.min.css'
import { GlobalProvider } from './context/GlobalState'
import { AppContainer, AppInner } from './styled'
import { Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import WatchList from './pages/WatchList/WatchList'
import Watched from './pages/Watched/Watched'
import Home from './pages/Home'

function App() {
  return (
    <GlobalProvider>
      <AppContainer>
        <AppInner>
          <Header />
        </AppInner>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </AppContainer>
    </GlobalProvider>
  );
}

export default App
