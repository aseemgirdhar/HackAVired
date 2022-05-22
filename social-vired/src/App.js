import './App.css';
import SignInOutContainer from './container/Index';
import Canvas from './components/canvas/Canvas';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Canvas />
    <Routes>
      <Route path='/' element={<SignInOutContainer />}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
