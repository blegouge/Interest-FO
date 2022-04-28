import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import List from "./components/List";
import {useState} from "react";

const cities = [
    {label: 'Marseille', coordinates: '43.296482,5.36978'}
];

function App() {

    const [coords, setCoords] = useState('');

    const updateListCity = async (e, value) => {
        if(value){
            setCoords(value.id);
        }else{
            setCoords(null);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>
                    Hackaton
                </h1>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cities}
                    sx={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Cities"
                    changeAc={updateListCity}
                    />}
                />
            </header>
            <List
                coords={coords}
            />
        </div>
    );
}

export default App;
