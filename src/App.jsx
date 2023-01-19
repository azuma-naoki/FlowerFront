import {BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
    return (
      <div className="footerFixed">
      <BrowserRouter>
        <Header/>
        <Body/>
        <Footer/>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;