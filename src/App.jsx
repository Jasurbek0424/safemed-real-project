// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero/Hero'
import GlobalMain from './components/GlobalMain/GlobalMain'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import FourNullFour from './components/FourNullFour/FourNullFour'
import SearchPage from './components/SearchPage/SearchPage'
import Med from './components/Med/Med'
import Safety from './components/Safety/Safety'


import { medEqiupments, safetyEqiupments } from './data/Json';
import MedProductDetail from './components/ProductDetail/MedProductDetail';
import SafetyProductDetail from './components/ProductDetail/SafetyProductDetail';
import Contact from './components/Contact/Contact';
import SiteMap from './components/SiteMap/SiteMap';



function App() {

  const countries = ['', 'qa', 'kz', 'ue', 'sa', 'kw', 'iq', 'eg', 'az', 'uz', 'tm', 'mn', 'ru'];

  return (
    <Router>
      <>
        <Routes>
          {countries.map((country) => (
            <Route
              key={country}
              path={`/${country}`}
              element={<>
                <Hero />
                <GlobalMain />
                <Footer />
              </>}
            />
          ))}
          <Route path="/Categories/medical" element={<Med medEqiupments={medEqiupments} type="medical" />} />
          <Route path="/Categories/safety" element={<Safety safetyEqiupments={safetyEqiupments} type="safety" />} />
          <Route
            path="/Categories/medical/:id"
            element={<MedProductDetail products={medEqiupments} type="medical" />}
          />
          <Route
            path="/Categories/safety/:id"
            element={<SafetyProductDetail products={safetyEqiupments} type="safety" />}
          />
          <Route path="/Categories" element={<Category />} />
          <Route path="/search-page" element={<SearchPage medEqiupments={medEqiupments} type="medical" />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="*" element={<FourNullFour />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;