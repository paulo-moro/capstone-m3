import Header from "./Components/Global/Header";
import Routes from "./Routes";
import GlobalStyle from "./Styles/globalStyle";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;


