
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ListTask from './Components/ListTask';
import Addtask from './Components/Addtask';
import { useState } from 'react';
import { Filter } from './Redux/Actions/Actions';


function App() {
 const dispatch=useDispatch()

 return (
    <div className="App">
    <h2>filter by done :</h2>
    <input type="checkbox" onClick={()=>dispatch(Filter())}   />
    
    <Addtask />
    <ListTask />
    </div>
  );
}

export default App;
