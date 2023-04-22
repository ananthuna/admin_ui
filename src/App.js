import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminUI from './pages/AdminUI'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<AdminUI />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
