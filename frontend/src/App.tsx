import React from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BishopsMessages from './BishopsMessages';

const DioceseHistory = () => <div>Diocese History</div>;
const Commissions = () => <div>Commissions</div>;
const ParishesDeaneries = () => <div>Parishes & Deaneries</div>;
const MassBroadcastsMedia = () => <div>Mass Broadcasts & Media</div>;
const GalleryGeneral = () => <div>Gallery General</div>;
const ClericalGallery = () => <div>Clerical Gallery</div>;
const ContactUs = () => <div>Contact Us</div>;
const DiocesanFactory = () => <div>The Diocesan Factory (Claire Fashions)</div>;
const MutarePastoralCentre = () => <div>Mutare Pastoral Centre</div>;
const ReligiousOrders = () => <div>Religious Orders</div>;

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          minHeight: '100vh',
          background:
            "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/feast-day-carmerlites.jpg') no-repeat center center fixed",
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <NavBar />
        <main style={{ padding: '2rem', maxWidth: 1200, margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<BishopsMessages />} />
            <Route path="/history" element={<DioceseHistory />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/parishes-deaneries" element={<ParishesDeaneries />} />
            <Route path="/mass-broadcasts-media" element={<MassBroadcastsMedia />} />
            <Route path="/gallery-general" element={<GalleryGeneral />} />
            <Route path="/clerical-gallery" element={<ClericalGallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/factory" element={<DiocesanFactory />} />
            <Route path="/pastoral-centre" element={<MutarePastoralCentre />} />
            <Route path="/religious-orders" element={<ReligiousOrders />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
