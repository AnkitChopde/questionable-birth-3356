
import './App.css';
import BelowMiddle from './components/homepage/BelowMiddle';
import Middle from './components/homepage/Middle';
import Navbar from './components/homepage/Navbar';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Middle/>
        <BelowMiddle />
    </div>
  );
}

export default App;
