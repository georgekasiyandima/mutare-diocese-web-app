import React from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './History';
import Home from './Home';
import Footer from './Footer';
import ContactUs from './ContactUs';
import MutarePastoralCentre from './MutarePastoralCentre';
import JubileePilgrimage from './JubileePilgrimage';
import News from './News';
import { Box, Card, Typography } from '@mui/material';
import WorkInProgress from './WorkInProgress';

// Bishop's Messages component
const BishopsMessages = () => (
  <Box sx={{ textAlign: 'center', py: 4 }}>
    <Typography variant="h4" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={3}>
      Bishop's Messages
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={4}>
      Welcome to the Bishop's Messages section. Here you will find spiritual guidance and messages from our current Bishop.
    </Typography>
    <Card sx={{ maxWidth: 800, mx: 'auto', p: 3, background: 'rgba(255,255,255,0.95)' }}>
      <Typography variant="h6" color="#5C4033" fontWeight={600} mb={2}>
        Latest Message from Bishop Paul Horan, O.Carm.
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        "As we journey through this Jubilee Year 2025, let us remember that we are all 'Pilgrims of Hope'. 
        May our faith guide us in serving our community with love and compassion."
      </Typography>
      <Typography variant="caption" color="#bfa14a" fontStyle="italic">
        - Bishop Paul Horan, O.Carm.
      </Typography>
    </Card>
  </Box>
);

// Placeholder components for each page
const DioceseHistory = History;
const Commissions = () => <WorkInProgress message="Commissions Page Coming Soon" subtext="Information about diocesan commissions will be available here." />;
const ParishesDeaneries = () => <WorkInProgress message="Parishes & Deaneries Page Coming Soon" subtext="Find details about parishes and deaneries here soon." />;
const MassBroadcastsMedia = () => <WorkInProgress message="Mass Broadcasts & Media Coming Soon" subtext="Live and recorded Mass broadcasts and media will be featured here." />;
const GalleryGeneral = () => <WorkInProgress message="Photo Gallery Coming Soon" subtext="A collection of diocesan photos will be available here." />;
const ClericalGallery = () => <WorkInProgress message="Clerical Gallery Coming Soon" subtext="Meet our clergy and view their profiles here soon." />;
const DiocesanFactory = () => <WorkInProgress message="Diocesan Factory (Claire Fashions) Coming Soon" subtext="Learn about our diocesan factory and its impact soon." />;
const ReligiousOrders = () => <WorkInProgress message="Religious Orders Page Coming Soon" subtext="Information about religious orders in the diocese will be available here." />;

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
            <Route path="/" element={<Home />} />
            <Route path="/bishops-messages" element={<BishopsMessages />} />
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
            <Route path="/jubilee-pilgrimage" element={<JubileePilgrimage />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
