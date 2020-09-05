import React, { useState, useEffect } from 'react';
import './App.css';
import { getOrgInfo } from './../../services/org.js';
import OrgCard from '../OrgCard/OrgCard';
import DetailOrg from '../DetailOrg/DetailOrg';

function App(props) {
  const [orgs, setOrgs] = useState([]);
  const [detailOrg, setDetailOrg] = useState(null);

  useEffect(() => {
    setOrgs(getOrgInfo());
  }, [ detailOrg ]);

  const orgCards = orgs.map((org) => {
    return <OrgCard key={org.id} org={org} setDetailOrg={setDetailOrg} />;
  });

  return (
    <main className="app">
      <header className="app-header"><h1>RG Cafe Preview</h1></header>
      <section className="app-body">
        {orgs.length > 0 && !detailOrg && orgCards}
        {detailOrg && <DetailOrg org={detailOrg} setDetailOrg={setDetailOrg} />}
      </section>
    </main>
  );
}

export default App;
