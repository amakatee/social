
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Search from './components/Search/Search';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Profile from './components/Profile/Profile';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import ProfilePhotosGrid from './components/Profile/features/ProfilePhotosGrid';
import ProfileProductsGrid from './components/Profile/features/ProfileProductsGrid';
import Layout from './components/Layout';
import SinglePhotoPage from './components/Profile/features/SinglePhotoPage';

function App() {
  return (
   
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route index path='/feed' element={<Feed />} />
        <Route path='search' element={<Search />} />
        <Route path='shoppingCart' element={<ShoppingCart />} />
        <Route path='profile' element={<Profile />}>
          <Route index element={<ProfilePhotosGrid />}  />
            {/* <Route path=':postId' element={<SinglePhotoPage />} />  */}
        

          <Route path='products' element={<ProfileProductsGrid />}/>

        </Route>
        <Route path='/"*"' element={<ErrorPage />} />
      </Routes>
      </>
 
  );
}

export default App;
