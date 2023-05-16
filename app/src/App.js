import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {Login} from './Components/Login';
import bd from './services/services';

function App() {
  const [loged, setLoged] = useState(false);
  const [codUser, setCodUser] = useState(null);
  const [reload, setReload] = useState(false);

  const handleLoged = (bool, cod_user) => {
    setCodUser(cod_user);
    console.log('handleloged codUser: ' + codUser);
    setLoged(bool);
    setReload(true);
  }
  return (
    <>
    { !loged 
    ? 
      <Login onLogin={handleLoged}/> 
    : 
      <div className="d-flex">
        <div className="scrolling" >

        </div>
        <div className="flex-sm-row col-sm-3 p-2 ">
          
        </div>
      </div>}
    </>
  );
}

export default App;
