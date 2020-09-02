import React from 'react';
import './OrgCard';

function OrgCard({ org }) {
  return (
    <section key={`org-${org.id}`} className='org-card'>
    </section>
  );
}

export default OrgCard;