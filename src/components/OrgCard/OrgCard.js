import React from 'react';
import './OrgCard';

function OrgCard({ org }) {
  return (
    <article key={`org-${org.id}`} className='org-card'>
    </article>
  );
}

export default OrgCard;