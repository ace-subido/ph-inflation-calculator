import React from "react"

import Calculator from "./Calculator"
import Notes from "./Notes"
import Header from "./Header"

const App = () => {
  return(
    <div className="App">
      <Header />
      <Calculator />
      <Notes />
    </div>
  )
}

export default App;
