import Header from "./components/header-component";
import Home from "./pages/HomePage";
import ListPage from "./pages/ListPage";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './app.css'


function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/post" element={<Header/>}/>
      </Routes>
    </Router>
  );
}

export default App;
