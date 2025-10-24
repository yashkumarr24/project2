import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { 
  LazyHomepage, 
  LazyServices, 
  LazyBooking, 
  LazyAbout, 
  LazyContact 
} from './utils/lazyComponents';

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="App">
        <Navbar />
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
          }}>
            <LoadingSpinner size="large" />
          </div>
        }>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LazyHomepage />} />
              <Route path="/services" element={<LazyServices />} />
              <Route path="/booking" element={<LazyBooking />} />
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/contact" element={<LazyContact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

