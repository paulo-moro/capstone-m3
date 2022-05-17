import Header from "./Components/global/Header";
import Providers from "./Providers";
import Routes from "./Routes";
import GlobalStyle from "./Styles/globalStyle";


function App() {
  return (
    <div className="App">
      <Providers>
        <GlobalStyle/>
        <Header />
        <Routes/>
      </Providers>      
    </div>
  );
}

export default App;


