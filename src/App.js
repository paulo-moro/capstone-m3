import Button from "./Components/Button";
import Header from "./Components/Header";
import Routes from "./Routes";
import GlobalStyle from "./Styles/globalStyle";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Routes/>
      <Button>Entrar</Button>
      <Button whiteButton width='small'>Logout</Button>
      <Button whiteButton width='medium'>Aguardando</Button>
      <Button width='350px'>Cadastrar Resíduo</Button>


    </div>
  );
}

export default App;
