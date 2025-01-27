import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Shop from './pages/Shop';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './style.css';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="*"
                        element={
                            <>
                                <Navbar />
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/shop" element={<Shop />} />
                                </Routes>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
