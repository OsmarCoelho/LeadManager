import React, { useEffect } from "react"
import "./App.css"
import store from "../../redux/store"
import { Provider } from "react-redux"
import LeadManager from "../LeadManager/LeadManager"
import { initApp } from "../../redux/modules/app/thunks"

function App() {
  useEffect(() => {
    store.dispatch(initApp())
  })

  return (
    <Provider store={store}>
      <LeadManager />
    </Provider>
  )
}

export default App
