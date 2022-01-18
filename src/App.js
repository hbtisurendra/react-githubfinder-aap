import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';
import Home from './Pages/Home';
import Alert from './Component/Layout/Alert';
import About from './Pages/About';
import User from './Component/user/User';
import Notfound from './Pages/Notfound';
import {GithubProvider} from './Context/github/GithubContext'
import {AlertProvider } from './Context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className = "flex flex-col justify-between h-screen">
      <Navbar />

      <main className ="container mx-auto px-3 pb-12">
        <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:login" element={<User />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </main>
    <Footer />
    </div>
  
    

    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
