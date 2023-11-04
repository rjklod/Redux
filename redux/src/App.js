
import { useSelector } from 'react-redux';
import './App.css';
import ListTask from './Components/ListTask';
import Addtask from './Components/Addtask';

function App() {
  
  return (
    <div className="App">
    <Addtask />
    <ListTask />
    </div>
  );
}

export default App;
