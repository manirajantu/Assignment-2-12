import {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import './App.css'

function App() {

    const [uvHealth, setUvHealth] = useState(null);

    useEffect(()=>{
        axios.get(`https://api.data.gov.sg/v1/environment/air-temperature`).then(res =>{
            setUvHealth(res.data.api_info.status);
        })
    
    }, [])

    return (
        <div className='App'>

            <div><label> Current Timestamp: </label>{moment().format("DD MM YYYY, HH:mm:ss")}</div>
            <br></br>
            <div><label> Current Health Level: </label>{uvHealth}</div>
        </div>
    )
}







export default App;