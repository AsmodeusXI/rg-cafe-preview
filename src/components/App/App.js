import React, { useState, useEffect } from 'react';
import './App.css';
import { getOrgInfo } from './../../services/org.js';

function App(props) {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    setOrgs(getOrgInfo());
  }, []);

  return (
    <main className="app">
      <header className="app-header">RG Cafe Preview</header>
      <section>

      </section>
    </main>
  );
}

export default App;
