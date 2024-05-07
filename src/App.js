import About from './component/About';
import Navbar from './component/Navbar';
import ProductDetails from './component/ProductDetails';
import ProductsList from './component/ProductsList';
import Slider from './component/Slider';
import { Routes, Route} from "react-router-dom";
 

function App() {
  return (
    <div className="App">
       <Navbar/> 
       <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <ProductsList />
          </>} />
     <Route path="about" element={<About/> } />
       <Route path="product/:productId" element={<ProductDetails/>} />
       </Routes>
       
    </div>
  );
}
export default App;
