import React from 'react'
import './App.css'
import { Left, Right ,Card} from './Components'

const App = () => {
  return (
    <div className="container">
        <Left/>
        <Card/>
        <Right/>
    </div>
  )
}

export default App