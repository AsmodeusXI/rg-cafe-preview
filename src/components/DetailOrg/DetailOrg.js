import React from 'react';
import './DetailOrg.css';
import OrgTags from '../OrgTags/OrgTags';

function DetailOrg({ org, setDetailOrg }) {
    return (
        <article className='detail-org'>
            <section className='detail-info'>
                <span id={`exit-org`} onClick={() => setDetailOrg(null)}>x</span>
                <h2>{org.name}</h2>
                <OrgTags tags={org.tags} />
                <h3>Contact:</h3>
                <ul>
                    <li>Email: <a href={`mailto:${org.contact.email}`}>{org.contact.email}</a></li>
                    <li>Phone: <a href={`tel:${org.contact.phone}`}>{org.contact.phone}</a></li>
                </ul>
                <p>{org.org_full_desc}</p>
            </section>
            <section className='detail-image'>
              <img src={org.image_url} alt={org.image_alt}></img>
            </section>
        </article>
    );
}

export default DetailOrg;