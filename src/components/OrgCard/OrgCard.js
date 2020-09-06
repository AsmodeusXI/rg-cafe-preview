import React from 'react';
import './OrgCard.css';
import OrgTags from '../OrgTags/OrgTags';

function OrgCard({ org, setDetailOrg }) {
  function handleClick() {
    setDetailOrg(org);
  }

  return (
    <article className='org-card' onClick={handleClick}>
      <section className='org-image'>
        <img src={org.image_url} alt={org.image_alt}></img>
      </section>
      <section className='org-info'>
        <h2>{org.name}</h2>
        <OrgTags tags={org.tags} />
        <p>{org.org_desc}</p>
        <a href={org.org_url}>Find them here!</a>
      </section>
    </article>
  );
}

export default OrgCard;