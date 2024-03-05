import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx';
import Test2 from './components/Test2.jsx'
import Test3 from './components/Test3.jsx'
import Test4 from './components/Test4.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}>
        </Route>
        <Route path="/test2" exact element={<Test2/>}></Route>
        <Route path="/contact" exact element={<Test3/>}></Route>
        <Route path="/circle" exact element={<Test4/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
