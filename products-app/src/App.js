import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm'
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faList, faPlus} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ProductsProvider } from './context/ProductsContext';

function App(){
  return(
    <div className = "App">
      <ProductsProvider>
        <Router>
          <div>
            {/*Navigation Links*/}
            <nav className="navbar navbar-expand navbar-light fullwidth">
              <div className='container-fluid'>
                <div className="collapse nav-bar-collapse" id="navbarNav">
                  <ul>
                    <li className='nav-item'>
                      <Link className="nav-link" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home">
                        <FontAwesomeIcon icon={faHome} />
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className="nav-link" to="/products" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Product List">
                        <FontAwesomeIcon icon={faList} />
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className="nav-link" to="/add" data-bs-toggle="tooltip" data-bs-placement="bottom" title="AddProduct">
                        <FontAwesomeIcon icon={faPlus} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/*Routes for different pages */}
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} /> {/* Catch all
              other route*/}

            </Routes>
          </div>
        </Router>
      </ProductsProvider>
    </div>
  );
};

export default App;