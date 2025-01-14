import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Posts from "./components/Posts"
import Create from './components/Create';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />  
        <Route path='/create' element={<Create />} />     
      </Routes>
    </Router>
  )
}

export default App
