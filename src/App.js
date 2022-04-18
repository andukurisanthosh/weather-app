import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Contact from './Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='contactus' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
