import './App.css'
import MathCaptcha from './components/MathCaptcha'
import ProgrammerCaptcha from './components/ProgrammerCaptcha'
import UnicornCaptcha from './components/UnicornCaptcha'
import TokenCaptcha from './components/TokenCaptcha'

function App() {
  return (
    <div className="app">
      <MathCaptcha />
      <ProgrammerCaptcha />
      <UnicornCaptcha />
      <TokenCaptcha />
    </div>
  )
}

export default App
