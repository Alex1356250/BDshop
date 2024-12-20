import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SearchModule } from './components/SearchModule';
import { NewReleases } from './components/NewReleases';
import { RandomComic } from './components/RandomComic';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Admin } from './components/Admin';
import { ComicsProvider } from './context/ComicsContext';

function App() {
  return (
    <ComicsProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <SearchModule />
                  <RandomComic />
                  <NewReleases />
                  <Newsletter />
                </>
              } />
              <Route path="/search" element={<SearchModule />} />
              <Route path="/nouveautes" element={<NewReleases />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ComicsProvider>
  );
}

export default App;