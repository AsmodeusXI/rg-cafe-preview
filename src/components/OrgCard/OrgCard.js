import React from 'react';
import './OrgCard.css';

function OrgCard({ org, setDetailOrg }) {
  function handleClick() {
    setDetailOrg(org);
  }

  return (
    <article className='org-card' onClick={handleClick}>
      <h2>{org.name}</h2>
      <p>{org.org_desc}</p>
      <a href={org.org_url}>Find them here!</a>
    </article>
  );
}

export default OrgCard;