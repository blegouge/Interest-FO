import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import List from './Components/List'


function App() {
    const cities = [
        {label : 'Marseille', coordinates: '43.296482,5.36978'}
    ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hackaton
        </h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={cities}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Cities" />}
        />
      </header>
      <List coords={cities[0].coordinates}/>
    </div>
  );
}

export default App;
