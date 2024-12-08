import { useState } from 'react'
import './App.css'
import Headers from './components/Headers'
import Welcome from "./components/Welcome"
import OnboardingSection from './components/OnboardingSection'
import EmployeeOnboarding from './components/EmployeeOnboarding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Welcome />
      <OnboardingSection />
      <EmployeeOnboarding />
    </>
  )
}

export default App
