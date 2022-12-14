import logo from './logo.svg';
import Main from './components/main/main';
import './App.css';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <div className="container" >
    <Routes>
          <Route path="/" element= {<Main />}/>
    </Routes>
  </div>
    </BrowserRouter>
  )
}

export default App;
