import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'
import store from './store'
import MovieList from './page/MovieList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <nav>
              <NavLink className="nav-item" to="/">首页</NavLink>
              <NavLink className="nav-item" to="/list">列表</NavLink>
            </nav>
            {/* <MovieList /> */}
            <Route path="/" exact component={MovieList}></Route>
            <Route path="/list" exact></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
