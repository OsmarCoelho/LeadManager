import React from "react"
import "./App.css"
import store from "../../redux/store"
import { Provider } from "react-redux"
import Button from "../../components/Button"
import logo from "../../assets/svg/logo.svg"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Pudim
          </a>
        </header>
      </div>
    </Provider>
  )
}

export default App
