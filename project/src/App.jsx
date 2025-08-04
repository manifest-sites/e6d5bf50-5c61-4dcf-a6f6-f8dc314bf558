import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import ClownsImpactApp from './components/ClownsImpactApp'

function App() {

  return (
    <Monetization>
      <ClownsImpactApp />
    </Monetization>
  )
}

export default App