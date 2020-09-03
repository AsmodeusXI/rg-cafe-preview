import React from 'react';
import './DetailOrg.css';

function DetailOrg({ org, setDetailOrg }) {
    return (
        <article className='detail-org'>
            <span id={`exit-org`} onClick={() => setDetailOrg(null)}>x</span>
            <h1>{org.name}</h1>
            <h3>Contact:</h3>
            <ul>
                <li>Email: <a href={`mailto:${org.contact.email}`}>{org.contact.email}</a></li>
                <li>Phone: <a href={`tel:${org.contact.phone}`}>{org.contact.phone}</a></li>
            </ul>
            <p>{org.org_full_desc}</p>
        </article>
    );
}

export default DetailOrg;