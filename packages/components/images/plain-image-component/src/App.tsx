import React, { useState } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  const Title = styled.h1`
    color: red;
  `;
  return (
    <div className="App">
      image component
    </div>
  )
}

export default App
