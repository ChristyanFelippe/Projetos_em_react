import { Titulo } from './AppStyles';
import Busca from './components/Busca';
import ClimaAtual from './components/ClimaAtual';
import Previsao from './components/Previsao';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);


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
