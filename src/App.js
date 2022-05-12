import Header from "./Components/Header";
import { Providers } from "./Providers";
import Routes from "./Routes";
import GlobalStyle from "./Styles/globalStyle";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Routes/>
    </div>
  );
}

export default App;


