import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
  color: #31e36;
`
const Subtitulo = styled.h2`
  color: green;
`
const Artigo = styled.section`
  color: #9393e2;
`
const Subtitulo2 = styled.h2`
  color: blue;
  font-size: 25px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Meu site</Titulo>
        <Subtitulo>Subtitulo</Subtitulo>
        <Artigo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec molestie libero, nec pulvinar erat. Cras ut mattis ante. Proin massa neque, aliquam eget aliquam et, lobortis venenatis dolor. Cras quis vehicula odio. Mauris non blandit urna. Ut vulputate elit eu pharetra rhoncus. Cras mollis ligula gravida sem blandit lobortis ullamcorper et dui.</Artigo>
        <Subtitulo2>Segunda Parte</Subtitulo2>
        <Artigo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec molestie libero, nec pulvinar erat. Cras ut mattis ante. Proin massa neque, aliquam eget aliquam et, lobortis venenatis dolor. Cras quis vehicula odio. Mauris non blandit urna. Ut vulputate elit eu pharetra rhoncus. Cras mollis ligula gravida sem blandit lobortis ullamcorper et dui.</Artigo>
      </header>
    </div>
  );
}

export default App;
