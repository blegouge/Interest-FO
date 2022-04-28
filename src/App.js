import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function uniqByKeepFirst(a, key) {
  let seen = new Set();
  return a.filter(item => {
      let k = key(item);
      return seen.has(k) ? false : seen.add(k);
  });
}

function App() {
  let json = require('./cities.json');
  json = uniqByKeepFirst(json, it => it.label);
  json = json.map((cityHash) => {
    return {label : cityHash.label, coordinates : cityHash.coordinates};
  });
  json = json.filter((cityHash) => {
    return cityHash.label != null && cityHash.coordinates != null;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height: 200 }} />
        <h1>
          Hackaton
        </h1>
        <div className="autocomplete">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={json}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField className="textfield" {...params} label="Ville"/>}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
