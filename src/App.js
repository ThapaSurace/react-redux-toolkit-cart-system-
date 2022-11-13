
import './App.css';
import Navbar from './components/navbar';
import Product  from './components/product';
import {Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";
import Cart from './components/cart';
import ProductDetails from './components/productDetails';


function App() {
  return (
    <>
     <ToastContainer />
    <Navbar />
     <Routes>
       <Route path='/' element={<Product />} exact />
       <Route path='/:title' element={<ProductDetails />} exact />
       <Route path='cart' element={<Cart />} exact />
     </Routes>

    </>
  );
}

export default App;
