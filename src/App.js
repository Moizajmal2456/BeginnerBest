import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Leftbar } from './Components/Leftbar/Leftbar';
import { Signin } from './Components/Signin/Signin';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Leftbar/>
      <Signin/>
    </div>
  );
}

export default App;
