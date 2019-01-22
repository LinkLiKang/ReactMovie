import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import store from './store'
import MovieList from './page/MovieList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MovieList />
            <Route></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
