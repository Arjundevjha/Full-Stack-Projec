import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateProduct/>}/>
        <Route path="/list" element={<ProductList/>}/>
        <Route path="/update" element={<EditProduct/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
