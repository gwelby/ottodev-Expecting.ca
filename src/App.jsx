import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home.jsx';
    import UserDashboard from './pages/UserDashboard.jsx';
    import ProviderDirectory from './pages/ProviderDirectory.jsx';
    import ResourceCenter from './pages/ResourceCenter.jsx';

    function App() {
      return (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/providers" element={<ProviderDirectory />} />
            <Route path="/resources" element={<ResourceCenter />} />
          </Routes>
        </div>
      );
    }

    export default App;
