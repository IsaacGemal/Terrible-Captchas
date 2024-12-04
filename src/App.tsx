import MathCaptcha from './components/MathCaptcha'
import ProgrammerCaptcha from './components/ProgrammerCaptcha'
import UnicornCaptcha from './components/UnicornCaptcha'
import TokenCaptcha from './components/TokenCaptcha'

function App() {
  return (
    <div className="flex flex-col items-center py-8 gap-8">
      <MathCaptcha />
      <ProgrammerCaptcha />
      <UnicornCaptcha />
      <TokenCaptcha />
    </div>
  )
}

export default App
