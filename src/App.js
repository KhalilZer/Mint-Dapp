
import './App.css';
import {useState,useEffect} from "react";
import PagePrincipale from './Components/PagePrincipale'
import Navbar from './Components/Navbar'
import parallax_bg from "./assets/background/parallax-bg.gif"

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
   ( <div className="App bg-cover h-screen md:h-full" style={{
        backgroundImage: `url(${parallax_bg})`,
       
      }}>
        <Navbar acc={accounts} set={setAccounts} />
        
        <PagePrincipale  acc={accounts} set={setAccounts} />

    </div>)
  );
}

export default App;
