import React, { useState, useEffect } from 'react';
import './App.css';
import { getOrgInfo } from './../../services/org.js';
import OrgCard from '../OrgCard/OrgCard';
import DetailOrg from '../DetailOrg/DetailOrg';

function App() {
  const [orgs, setOrgs] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagFilter, setTagFilter] = useState('');
  const [detailOrg, setDetailOrg] = useState(null);

  useEffect(() => {
    const orgInfo = getOrgInfo();
    setOrgs(orgInfo);

    let orgTags = [];
    for (const org of orgInfo) {
      if (org.tags && org.tags.length > 0) {
        for (const orgTag of org.tags) {
          if (!orgTags.includes(orgTag)) {
            orgTags.push(orgTag);
          }
        }
      }
    }

    setTags(orgTags);
  }, [ detailOrg ]);

  const displayOrgCards = function () {
    return orgs
      .filter((org) => {
        if (tagFilter !== '') {
          return org.tags.includes(tagFilter);
        } else {
          return true;
        }
      })
      .map((org) => {
        return <OrgCard key={org.id} org={org} setDetailOrg={setDetailOrg} />;
      });
  }

  const getRandomOrg = function () {
    const orgIdx = Math.floor(Math.random() * orgs.length);
    setDetailOrg(orgs[orgIdx]);
  }

  const filterByTag = function (changeEvent) {
    const filterTag = changeEvent.target.value;
    setTagFilter(filterTag);
  }

  return (
    <main className="app">
      <header className="app-header"><h1>RG Cafe Preview</h1></header>
      <nav className="app-nav">
        <button className={'rg_button'} onClick={getRandomOrg}>Random</button>
        <select className={'rg_select'} onChange={filterByTag} defaultValue={tagFilter}>
          <option value=''>All</option>
          {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
        </select>
      </nav>
      <section className="app-body">
        {orgs.length > 0 && !detailOrg && displayOrgCards()}
        {detailOrg && <DetailOrg org={detailOrg} setDetailOrg={setDetailOrg} />}
      </section>
    </main>
  );
}

export default App;
