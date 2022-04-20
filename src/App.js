import './App.css';
import { Routes, Route,} from "react-router-dom";
import Home from './routes/Home';
import Account from './routes/Account';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}





export default App;
