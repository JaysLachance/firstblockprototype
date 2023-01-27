import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
        {/* other components or content goes here */}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
