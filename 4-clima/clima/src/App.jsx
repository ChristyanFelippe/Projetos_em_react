import { Titulo } from './AppStyles'
import Busca from './components/Busca'
import ClimaAtual from './components/ClimaAtual'
import Previsao from './components/Previsao'

function App() {

  return (
    <div>
      <Titulo>Condições Climáticas</Titulo>
      <Busca />
      <ClimaAtual />
      <Previsao />
    </div>
  )
}

export default App
