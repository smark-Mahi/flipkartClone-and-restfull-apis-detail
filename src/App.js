import './App.css';
//import Search from './Components/Search';
//import Card from './Components/Card';
import Makeupcards from './Components/Makeupcards';
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import Testingapi from './Components/Testingapi';
import Navbar from './Components/Navbar';
import Home from './tielo/Home';
import Addtocart from './Components/Addtocart';
import Products from './Components/Products';
import Productsdetails from './Components/Productsdetails';
import Plzone from './Plzone/Plzone';
import Teampage from './Plzone/Teampage';
import Profile from './Facebookclone/Profile';
import Protected from './Facebookclone/Protected';
import Dashboard from './Facebookclone/Dashboard';
import Login from './Facebookclone/Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>  
      <Routes>
      <Route path='/' element={<Protected Component={Home}/>}/>
      <Route path='makeupcards' element={<Makeupcards/>}/>
      <Route path='testingapi' element={<Testingapi/>}/>
      <Route path='makeupcards/addtocart' element={<Addtocart/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:id' element={<Productsdetails/>}/>
      <Route path='plzone' element={<Protected Component={Plzone}/>}/>
      <Route path='card/:id' element={<Teampage/>}/>
      <Route path='dashboard' element={<Protected Component={Dashboard}/>}/>
      <Route path='login' element={<Login/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
