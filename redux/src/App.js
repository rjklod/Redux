
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const data=useSelector(state=>state.todo)
  console.log(data)
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
