import './App.css'
// fontes usadas abaixo
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index/>
        <Route path='/home' element={<HomePage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
};


export default App
